const db = require('../models');

const loginService = { 
    checkEmail: (email, password) => {
        const login = db.User.findOne({
            where: { email, password },
        });
    return login;
    },
    /* checkLogin: (req, res, next) => {
        const { email, password } = req.body;
        const userLogin = email && password;
    if (!userLogin) {
        return res.status(400)
    .json({ message: 'Some required fields are missing' });
    }
    return next();
    }, */
};

module.exports = loginService;
