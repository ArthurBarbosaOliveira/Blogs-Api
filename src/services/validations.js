const { Category } = require('../models');
const joi = require('./joi');

const Validation = {
    checkCategory: async (category) => { 
        const memberCategory = await Promise.all(
            category.map((id) => Category.findByPk(id)),
    );
        const validateCategory = memberCategory.includes(null);
        if (validateCategory) {
            return {
                type: 'catPk.notFound',
                message: 'one or more "categoryIds" not found',
        };
    }
            return { type: null, message: '' };
},
    checkPost: (req, res, next) => {
        const post = req.body;
        const { error } = joi.check.validate(post);
        if (error) {
            return res.status(400)
        .json({ message: 'Some required fields are missing' });
    }
        next();
},
     error: () => {
        const error = {
            'any.required': 400,
            'any.invalid': 422,
            'email.inUse': 409,
            'pk.notFound': 404,
            INVALID_VALUE: 400,
            test: 404,
            'catPk.notFound': 400,
        };
        const map = (type) => error[type] || 500;
    return map;
    }, 

};

module.exports = Validation;
