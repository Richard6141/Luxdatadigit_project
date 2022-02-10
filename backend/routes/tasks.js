const express = require('express');
const tasksController = require('../controllers/task.controller')

const router = express.Router();

router.get('/', tasksController.index);

module.exports = router;