const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.post('/register', userController.singUp)
router.post('/login', userController.logIn)
router.get('/', userController.allusers)
router.get('/:id', userController.show)

module.exports = router