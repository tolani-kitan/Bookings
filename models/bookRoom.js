const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    bookings: [{ type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    }],
    room: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    }]
});

module.exports = mongoose.model('BookRoom', RoomSchema);