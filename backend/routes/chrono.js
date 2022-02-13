const express = require('express');
const chronoController = require('../controllers/chrono.controller');
const router = express.Router();

router.post('/settime', chronoController.setTime)

module.exports = router