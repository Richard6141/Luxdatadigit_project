const express = require('express');
const tasksController = require('../controllers/task.controller')

const router = express.Router();

router.post('/', tasksController.save);
router.get('/:id', tasksController.show);
router.get('/', tasksController.index);
router.patch('/:id', tasksController.update);
router.delete('/:id', tasksController.destroy);

module.exports = router;