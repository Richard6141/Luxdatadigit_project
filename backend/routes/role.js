const express = require('express');
const roleController = require('../controllers/role.controller');
const router = express.Router();

router.post('/createrole', roleController.createrole)
router.get('/:id', roleController.show)
router.get('/', roleController.index)
router.put('/:id', roleController.update)
router.delete('/:id', roleController.destroy)
// router.post('/login', userController.logIn)
// router.get('/', userController.allusers)
// router.get('/:id', userController.show)

module.exports = router