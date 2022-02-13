const express = require('express');
const userroleController = require('../controllers/userrole.controller');
const checkAuth = require('../middleware/check-auth');
const AuthMiddleware = require('../middleware/check-auth')

const router = express.Router();

router.post('/setrole', AuthMiddleware.checkAuth, userroleController.setUserRole)

module.exports = router