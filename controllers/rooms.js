const ErrorResponse = require('../utilis/errorResponse');
const asyncHandler = require('../middleware/async');
const Room = require('../models/rooms');

// @desc    Get all rooms
// @route   GET/api/rooms
// @access  Public

exports.getRooms = asyncHandler(async (req, res, next) => {
        const rooms = await Room.find();

        res.status(200).json({ 
            success: true, 
            count: rooms.length,
            data: rooms
        }) 
});


// @desc    Get single room
// @route   GET/api/room/:id
// @access  Private
exports.getRoom = asyncHandler(async (req, res, next) => {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return next(
                new ErrorResponse(`Room not found with id of ${req.params.id}`, 404)
            );
        }

        res.status(200).json({ 
            success: true, 
            data: room
        })
});

// @desc    Create new room
// @route   POST /api/room
// @access  Private
exports.createRoom = asyncHandler(async (req, res, next) => {
        const room = await Room.create(req.body);

        res.status(201).json({
            success: true,
            data: room
        }); 
});

// @desc    Update room
// @route   PUT /api/rooms/:id
// @access  Private
exports.updateRoom = asyncHandler(async (req, res, next) => {
        const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!room){
            new ErrorResponse(`Room not found with id of ${req.params.id}`, 404)
        }

        res.status(200).json({ 
            success: true, 
            data: room
        })
    
});

// @desc    Delete room
// @route   DELETE /api/rooms/:id
// @access  Private
exports.deleteRoom = asyncHandler(async (req, res, next) => {
        const room = await Room.findByIdAndDelete(req.params.id);

        if(!room){
            new ErrorResponse(`Room not found with id of ${req.params.id}`, 404)
        }

        res.status(200).json({ 
            success: true, 
            data: {}
        });
    
});

// @desc    Book a room
// @route   POST /api/rooms
// @access  Private
exports.bookRoom = asyncHandler(async (req, res, next) => {
    const {roomId} = req.body
    const bookedRoom = new Room({
        roomId,
        user: req.user.id
    });

    const booked = await bookedRoom.save();

    res.status(200).json(booked); 
});