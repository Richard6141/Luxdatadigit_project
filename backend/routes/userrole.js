const express = require('express');
const userroleController = require('../controllers/userrole.controller');
const checkAuth = require('../middleware/check-auth');
const AuthMiddleware = require('../middleware/check-auth')

const router = express.Router();

router.post('/setrole', AuthMiddleware.checkAuth, userroleController.setUserRole)
// router.get('/:id', roleController.show)
// router.get('/', roleController.index)
// router.put('/:id', roleController.update)
// router.delete('/:id', roleController.destroy)
// router.post('/login', userController.logIn)
// router.get('/', userController.allusers)
// router.get('/:id', userController.show)

module.exports = router