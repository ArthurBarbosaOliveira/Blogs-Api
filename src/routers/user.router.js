const { Router } = require('express');

const userController = require('../controllers/user.controller');
const { checkCreate } = require('../services/user.service');
const { validateJwt } = require('../services/jwtService');

const router = Router();

router.post('/', checkCreate, userController.create);
router.get('/', validateJwt, userController.getAllUser);
router.get('/:id', validateJwt, userController.getById);

module.exports = router;
