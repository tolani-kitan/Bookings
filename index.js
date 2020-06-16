const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT);