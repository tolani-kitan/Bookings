const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    name: {
        type: String,
        required: [true, 'Please add a room'],
        unique: true,
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
    
});

module.exports = mongoose.model('Room', RoomSchema);
