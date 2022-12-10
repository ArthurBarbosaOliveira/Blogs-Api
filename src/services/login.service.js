const db = require('../models');

const loginService = { 
    checkEmail: (email, password) => {
        const userLogin = db.User.findOne({
            where: { email, password },
        });
    return userLogin;
    },
};

module.exports = loginService;
