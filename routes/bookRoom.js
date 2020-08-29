
const express = require("express");
const { 
    bookRoom,
    getBookedRoom,
    updateBookedRoom,
    deleteBookedRoom
} = require('../controllers/bookRoom');

const router = express.Router();

const { protect } = require('../middleware/auth');

router
    .route('/')
    // .post(protect, bookRoom);
    // .get(protect, getBookedRoom);

router
    .route('/:id')
    .post(protect, bookRoom)
    .get(protect, getBookedRoom)
    .put(protect, updateBookedRoom)
    .delete(protect, deleteBookedRoom);



module.exports = router; 