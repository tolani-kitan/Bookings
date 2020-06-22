const express = require('express');
const { register, login, dashboard, users } = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');


router.post('/register', register);
router.post('/login', login);
router.get('/dashboard', protect, dashboard);
router.get('/users', users);



module.exports = router;