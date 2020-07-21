

const ErrorResponse = require('../utilis/errorResponse');
const asyncHandler = require('../middleware/async');
const Booking = require('../models/bookings');
const User = require('../models/users');

// @desc    Get all bookings
// @route   GET/api/bookings
// @access  Public

exports.getBookings = asyncHandler(async (req, res, next) => {
        const bookings = await Booking.find();

        res.status(200).json({ 
            success: true, 
            count: bookings.length,
            data: bookings
        }) 
});


// @desc    Get single booking
// @route   GET/api/:userId/bookings
// @access  Private
exports.getBooking = asyncHandler(async (req, res, next) => {
        const booking = await Booking.findById(req.params.id).populate({
            path: 'users'
        });
        if (!booking) {
            return next(
                new ErrorResponse(`Booking not found with id of ${req.params.id}`, 404)
            );
        }

        res.status(200).json({ 
            success: true, 
            data: booking
        })
});

// @desc    Create new booking
// @route   POST /api/:userId/bookings
// @access  Private
exports.createBooking = asyncHandler(async (req, res, next) => {
    const {startTime, endTime, bookedDate} = req.body
    const newBooking = new Booking({
        startTime,
        endTime,
        bookedDate,
        user: req.user.id,
        // room: req.room.id
    });
    const booking = await newBooking.save();
    res.json(booking);
});

// @desc    Update booking
// @route   PUT /api/bookings/:id
// @access  Private
exports.updateBooking = asyncHandler(async (req, res, next) => {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!booking){
            new ErrorResponse(`Booking not found with id of ${req.params.id}`, 404)
        }

        res.status(200).json({ 
            success: true, 
            data: booking
        })
    
});

// @desc    Delete booking
// @route   DELETE /api/v1/bookings/:id
// @access  Private
exports.deleteBooking = asyncHandler(async (req, res, next) => {
        const booking = await Booking.findByIdAndDelete(req.params.id);

        if(!booking){
            new ErrorResponse(`Booking not found with id of ${req.params.id}`, 404)
        }

        res.status(200).json({ 
            success: true, 
            data: {}
        });
    
});














