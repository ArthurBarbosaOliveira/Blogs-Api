const { Router } = require('express');

const { validateJwt } = require('../services/jwtService');
const postController = require('../controllers/post.controller');
// const check = require('../services/validatePost');
/* const validatePost = require('../services/validations'); */

const router = Router();

router.post('/', validateJwt, postController.create);
router.get('/', validateJwt, postController.getAll);

module.exports = router;
