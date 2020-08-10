const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingsSchema = new Schema({
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
    bookRoom: { type: Schema.Types.ObjectId,
        ref: "BookRoom"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model('Booking', BookingsSchema);