const mongoose = require('mongoose');


const BookRoomSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    
    name: {
        type: String,
        required: [true, 'Please add a room'],
        
    },
    roomId: {
        type: String,
        ref: "Room",
    },
    startTime: {
        type: String,
        match: [ 
            /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/
        ],
        required: [true, 'Please add a start time'],
        
    },
    endTime: {
        type: String,
        match: [ 
            /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/
        ],
        required: [true, 'Please add a end time'],
        
    },
    bookedDate: {
        type: Date,
        required: [true, 'Please add a date'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    capacity: {
        type: Number
    },
    location: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean
    },
    images: {
        type: Array,
        required: [true, 'Please add images']
    },
    features: {
        type: Array,
        required: [true, 'Please tick the available features']
    }
    
});

module.exports = mongoose.model('BookRoom', BookRoomSchema);