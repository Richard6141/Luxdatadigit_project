const express = require('express');
const checkAuthMiddleware = require('../middleware/check-auth')
const userController = require('../controllers/user.controller');
const AuthMiddleware = require('../middleware/check-auth')
const router = express.Router();

router.post('/register', userController.singUp)
router.post('/login', userController.logIn)
router.get('/', userController.allusers)
router.get('/:id', AuthMiddleware.checkAuth, userController.show)
router.delete('/:id', AuthMiddleware.checkAuth, userController.destroy)
router.patch('/:id', AuthMiddleware.checkAuth, userController.userupdate)
// router.get('/logout', userController.logout)

module.exports = router