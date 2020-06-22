const express = require("express");
const { 
    getBookings,
    getBooking,
    // createBooking,
    updateBooking,
    deleteBooking
} = require('../controllers/bookings');

const router = express.Router();

router
    .route('/')
    .get(getBookings)
    // .post(createBooking);

router
    .route('/:id')
    .get(getBooking)
    .put(updateBooking)
    .delete(deleteBooking);

module.exports = router; 