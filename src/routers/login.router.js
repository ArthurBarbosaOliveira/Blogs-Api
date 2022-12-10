const { Router } = require('express');

const loginController = require('../controllers/login.controller');
const checkLogin = require('../services/login.service');

const router = Router();

router.post('/', checkLogin.checkLogin, loginController.login);

module.exports = router;
