const express = require('express');
const router = require('./src/routes/api');
const app = new express();

// Security Middleware Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');


// // Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(bodyParser.json());

// Security rate limiting
const limit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})

app.use(limit);

// MongoDB Database Connection
const URI = 'mongodb://127.0.0.1:27017/school';
const options = { user: '', pass: '' };
mongoose.connect(URI, options, (error) => {
  if (!error) {
    console.log('Database Connection Success!')
  } else {
    console.log('Database Connection Fail!');
  };
})

// Configure the application router
app.use('/api/v1', router);

// Undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ status: "Fail", data: "Not Found" })
})

module.exports = app;
