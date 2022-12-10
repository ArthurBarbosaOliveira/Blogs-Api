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
};

module.exports = userController;
