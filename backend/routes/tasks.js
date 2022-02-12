const express = require('express');
const tasksController = require('../controllers/task.controller')
const checkAuthMiddleware = require('../middleware/check-auth')
const router = express.Router();

router.post('/', checkAuthMiddleware.checkAuth, tasksController.save);
router.get('/:id', tasksController.show);
router.get('/', tasksController.index);
router.patch('/:id', checkAuthMiddleware.checkAuth, tasksController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, tasksController.destroy);

module.exports = router;