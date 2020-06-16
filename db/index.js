const mongoose = require('mongoose');
const keys = require('./config/keys');

const client = mongoose.connect(keys.mongoURI);

module.exports = client;