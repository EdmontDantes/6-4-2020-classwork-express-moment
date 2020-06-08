const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const timer = require('./middlewares/timer.js');

const port = process.env.PORT || 8080


app.use(timer);


app.listen(port)


