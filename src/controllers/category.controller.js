const categoryService = require('../services/category.service');

const categoryController = {
    create: async (req, res) => {
        const { name } = req.body;
        if (!name) {
            return res.status(400)
        .json({ message: '"name" is required' });
        }
        const newCategory = await categoryService.create({ name });
            return res.status(201)
        .json({ newCategory, name });
    },
    getAllUser: async (req, res) => {
        const response = await categoryService.getAllUsers();
            return res.status(200)
        .json(response);
    },
};

module.exports = categoryController;
