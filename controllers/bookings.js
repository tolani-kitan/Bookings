

// const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
// const Bookings = require('../models/Bookings');

// @desc    Get all bookings
// @route   GET/api/v1/bookings
// @access  Public

exports.getBookings = asyncHandler(async (req, res, next) => {
    // try {
        const bookings = await Booking.find();

        res.status(200).json({ 
            success: true, 
            count: bookings.length,
            data: bookings
        })
    // } catch (err) {
    //     next(err);
    // }  
});


// @desc    Get single booking
// @route   GET/api/v1/booking/:id
// @access  Public
exports.getBooking = asyncHandler(async (req, res, next) => {
    // try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return next(
                new ErrorResponse(`Booking not found with id of ${req.params.id}`, 404)
            );
        }

        res.status(200).json({ 
            success: true, 
            data: booking
        })
    // } catch (err) {
    //     next(err);
    // }
});

// @desc    Create new booking
// @route   POST /api/v1/booking
// @access  Private
exports.createBookings = asyncHandler(async (req, res, next) => {
    // try {
        const bookings = await Booking.create(req.body);

        res.status(201).json({
            success: true,
            data: booking
        });
    // } catch (err) {
    //     next(err);
    // }
    
});

// @desc    Update booking
// @route   PUT /api/v1/bookings/:id
// @access  Private
exports.updateBooking = asyncHandler(async (req, res, next) => {
    // try {
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
    // } catch (err) {
    //     next(err);
    // }
    
});

// @desc    Delete booking
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBooking = asyncHandler(async (req, res, next) => {
    // try {
        const booking = await Booking.findByIdAndDelete(req.params.id);

        if(!booking){
            new ErrorResponse(`Booking not found with id of ${req.params.id}`, 404)
        }

        res.status(200).json({ 
            success: true, 
            data: {}
        });
    // } catch (err) {
    //     next(err);
    // }
    
});














