const express = require('express');
const { register, login, logout, dashboard, users } = require('../controllers/auth');

const router = express.Router();

const { protect } = require("../middleware/auth");

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/dashboard', protect, dashboard);
router.get('/users', users);

module.exports = router;
