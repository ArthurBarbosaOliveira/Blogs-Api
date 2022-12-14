const { Router } = require('express');

const { validateJwt } = require('../services/jwtService');
const categoryController = require('../controllers/category.controller');

const router = Router();

router.post('/', validateJwt, categoryController.create);
router.get('/', validateJwt, categoryController.getAllUser);

module.exports = router;
