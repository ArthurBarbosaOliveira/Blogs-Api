const jwt = require('../services/jwtService');
const loginService = require('../services/login.service');

const loginController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        const user = await loginService.checkEmail(email, password);
        if (!user) {
            return res.status(400)
        .json({ message: 'Invalid fields' });
        }
        const token = jwt.createToken(user.email);
        return res.status(200)
        .json({ token });
    },
};

module.exports = loginController;
