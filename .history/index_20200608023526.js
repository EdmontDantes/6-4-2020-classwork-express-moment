const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const timer = require('./')

const port = process.env.PORT || 8080;



