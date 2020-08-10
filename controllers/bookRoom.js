const ErrorResponse = require('../utilis/errorResponse');
const asyncHandler = require('../middleware/async');
const Room = require('../models/rooms');
const User = require('../models/users');
const BookRoom = require('../models/bookRoom');




// @desc    Book a room
// @route   POST /api/bookroom/roomId
// @access  Private
exports.bookRoom = asyncHandler(async (req, res, next) => {
    // req.body.user = req.user.id;
    // const user = await User.findById(req.user.id);
    const user = res.locals.user;

    const {name, capacity, startTime, endTime, bookedDate,location} = req.body;


        // const bookRoom = await BookRoom.create({
        //     startTime,
        //     endTime,
        //     bookedDate,
        //     capacity,
        //     name,
        //     startTime,
        //     endTime,
        //     location,
        //     user: req.user.id,
        // });
        

        const bookRoom = new BookRoom({
            startTime,
            endTime,
            bookedDate,
            capacity,
            name,
            startTime,
            endTime,
            location,
            // user: req.user.id,
        });

        BookRoom.findById(bookRoom._id)
                .populate('user')

    res.status(201).json({
        success: true,
        data: bookRoom
    })

});


// @desc    Get single bookedroom
// @route   GET/api/bookroom/:id
// @access  Private
exports.getBookedRoom = asyncHandler(async (req, res, next) => {
    const bookedRoom = await BookRoom.findById(req.params.id);
    if (!bookedRoom) {
        return next(
            new ErrorResponse(`BookedRoom not found with id of ${req.params.id}`, 404)
        );
    }

    res.status(200).json({ 
        success: true, 
        data: bookedRoom
    })
});