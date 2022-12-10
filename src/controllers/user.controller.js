const jwt = require('../services/jwtService');
const userService = require('../services/user.service');

const userController = {
    create: async (req, res) => {
        const { displayName, email, password, image } = req.body;
        const member = await userService.checkEmail(email);
        if (member) {
            return res.status(409)
        .json({ message: 'User already registered' });
        }
        const newMember = await userService.createMember({ displayName, email, password, image });
        const token = jwt.createToken(newMember);
            return res.status(201)
        .json({ token });
    },
    getAllUser: async (req, res) => {
        const response = await userService.getAllUsers();
            return res.status(200)
        .json(response);
    },
    getById: async (req, res) => {
        const { id } = req.params;
        const response = await userService.getById(id);
        if (!response) {
            return res.status(404)
        .send({ message: 'User does not exist' });
        }
            return res.status(200)
        .json(response);
    },
};

module.exports = userController;
