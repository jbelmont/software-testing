'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');

const users = require('../models/db');

router.get('/badMofos', (req, res, next) => {
    res.send(users);
});

module.exports = router;