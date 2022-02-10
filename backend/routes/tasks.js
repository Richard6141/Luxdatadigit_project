const express = require('express');
const tasksController = require('../controllers/task.controller')

const router = express.Router();

router.post('/', tasksController.save);

module.exports = router;