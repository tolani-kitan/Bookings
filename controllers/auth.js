const ErrorResponse = require("../utilis/errorResponse");
const asyncHandler = require("../middleware/async");
const auth = require("../middleware/auth");
const User = require("../models/users");

// @desc        Register user
// @route       POST/auth/register
// @access      Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, image } = req.body;

  // Create User
  const user = await User.create({
    name,
    email,
    password,
    image,
  });

  sendTokenResponse(user, 200, res);
});

//@desc Get all users
//@route GET/auth/users
//@access Private
exports.users = asyncHandler( async (req, res, next) => {
    const user = await User.find(req.user);

    res.status(200).json({
        success:true,
        count: user.length,
        data: user
    })
    
})

// @desc        Login user
// @route       POST/auth/login
// @access      Public

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credential", 401));
  }

  sendTokenResponse(user, 200, res);
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 3000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};

// @desc        GET current logged in user
// @route       POST/auth/me
// @access      Private
exports.dashboard = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc        Logout user
// @route       POST/auth/logout
// @access      Private
exports.logout = asyncHandler(async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });
    res.status(200).json({
        success:true,
        data: {}
    });
});
