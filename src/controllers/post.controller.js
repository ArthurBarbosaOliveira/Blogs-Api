const postService = require('../services/post.service');

const postController = {
    create: async (req, res) => {
        const member = req.body;
        const token = req.user;
        const { type, message } = await postService.create(member, token);
        if (type) {
             return res.status(400).json({ message: 'deu error' });
    }res.status(201).json(message);
},
    getAll: async (_req, res) => {
    const { type, message } = await postService.getAll();
    if (type) return res.status(404).json({ message });
    res.status(200).json(message);
},
    };

module.exports = postController;
