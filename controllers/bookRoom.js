const ErrorResponse = require("../utilis/errorResponse");
const asyncHandler = require("../middleware/async");
const Room = require("../models/rooms");
const User = require("../models/users");
const BookRoom = require("../models/bookRoom");

// @desc    Book a room
// @route   POST /api/bookroom/roomId
// @access  Private
exports.bookRoom = asyncHandler(async (req, res, next) => {
  // req.body.user = req.user.id;
  // const user = await User.findById(req.user.id);
  const user = res.locals.user;

  const {
    name,
    capacity,
    images,
    startTime,
    endTime,
    bookedDate,
    availability,
    location,
  } = req.body;
  // console.log(startTime, endTime)
  const checkAvailable = await BookRoom.find({ roomId: req.params.id });
  console.log(checkAvailable, "finding all");

  if (checkAvailable.length > 0) {
    for (let i = 0; i < checkAvailable.length; i++) {
      if (
        checkAvailable[i].startTime <= startTime &&
        checkAvailable[i].endTime >= startTime
      ) {
        return res.status(400).json({
          error: `This Room has been booked for ${checkAvailable[i].startTime} to ${checkAvailable[i].endTime}`,
        });
      }
      if (
        checkAvailable[i].startTime <= endTime &&
        checkAvailable[i].endTime >= endTime
      ) {
        return res.status(400).json({
          error: `There's an ongoing session that started from ${checkAvailable[i].startTime} and will end by ${checkAvailable[i].endTime}`,
        });
      }
    }
  }

  const bookRoom = await BookRoom.create({
    startTime,
    endTime,
    bookedDate,
    capacity,
    name,
    images,
    location,
    availability,
    user: req.user.id,
    roomId: req.params.id,
  });

  res.status(201).json({
    success: true,
    data: bookRoom,
  });
});

// @desc    Get single bookedroom
// @route   GET/api/bookroom/getBookedRoom
// @access  Private
exports.getBookedRoom = asyncHandler(async (req, res, next) => {
  const bookedRoom = await BookRoom.find({ user: req.user.id });
  // if (!bookedRoom) {
  //     return next(
  //         new ErrorResponse(`BookedRoom not found with id of ${req.user.id}`, 404)
  //     );
  // }

  res.status(200).json({
    success: true,
    count: bookedRoom.length,
    data: bookedRoom,
  });
});

// @desc    Update bookedRoom
// @route   PUT/api/bookroom/bookedRoomid
// @access  Private
exports.updateBookedRoom = asyncHandler(async (req, res, next) => {
  const bookedRoom = await BookRoom.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bookedRoom) {
    new ErrorResponse(`Booking not found with id of ${req.params.id}`, 404);
  }

  res.status(200).json({
    success: true,
    data: bookedRoom,
  });
});

// @desc    Delete bookedRoom
// @route   DELETE /api/bookroom/bookedRoomid
// @access  Private
exports.deleteBookedRoom = asyncHandler(async (req, res, next) => {
  const bookedRoom = await BookRoom.findByIdAndDelete(req.params.id);

  if (!bookedRoom) {
    new ErrorResponse(`BookedRoom not found with id of ${req.params.id}`, 404);
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});
