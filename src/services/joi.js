const Joi = require('joi');

const validatePost = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required().min(1),
  });

const test = {};

module.export = {
    validatePost,
    test,
};
