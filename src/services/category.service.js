const { Category } = require('../models');

const categoryService = {
    create: async (name) => {
        const category = await Category.create(name);
        return category;
    },
    getAllUsers: async () => {
        const categories = await Category.findAll();
            return categories;
    },
};

module.exports = categoryService;
