const { Router } = require('express');

const userController = require('../controllers/user.controller');
const { checkCreate } = require('../services/user.service');

const router = Router();

router.post('/', checkCreate, userController.create);

module.exports = router;
