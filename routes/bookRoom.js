
const express = require("express");
const { 
    bookRoom,
    getBookedRoom
} = require('../controllers/bookRoom');

const router = express.Router();

const { protect } = require('../middleware/auth');

// router
//     .route('/')
    // .post(protect, bookRoom);

router
    .route('/:id')
    .post(protect, bookRoom)
    .get(protect, getBookedRoom);



module.exports = router; 