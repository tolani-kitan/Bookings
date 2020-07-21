const express = require('express');
const { getBookings, getBooking, createBooking, updateBooking, deleteBooking } = require('../controllers/bookings');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/createBooking', protect, createBooking);
router.get('/getBookings', getBookings);
router.get('/getBooking/:id', getBooking);
router.put('/updateBooking/:id', updateBooking);
router.delete('/deleteBooking/:id', deleteBooking);


module.exports = router;