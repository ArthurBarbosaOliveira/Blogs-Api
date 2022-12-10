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
        checkLogin: (req, res, next) => {
            const { email, password } = req.body;
            const userLogin = email && password;
        if (!userLogin) {
            return res.status(400)
        .json({ message: 'Some required fields are missing' });
        }
        return next();
        },
    };

module.exports = loginController;
