const db = require('../models');

const userService = {
    createMember: async (data) => {
        const member = await db.User.create(data);
        const { password: _, ...userWithoutPassword } = member.dataValues;
        return userWithoutPassword;
    },
    checkEmail: async (email) => {
        const member = await db.User.findOne({ where: { email } });
        return member;
    },
    checkCreate: (req, res, next) => {
        const { displayName, email, password } = req.body;
        const regex = /\S+@\S+\.\S+/;
        const member = regex.test(email);
        if (displayName.length < 8) {
            return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' }); 
}
        if (!member) {
            return res.status(400)
        .json({ message: '"email" must be a valid email' }); 
}
        if (password.length < 6) {
            return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' }); 
}
            return next();     
    },
    getAllUsers: async () => {
        const users = await db.User.findAll({ attributes: { exclude: ['password'] } });
            return users;
    },
    getById: async (id) => {
        const users = await db.User.findByPk(id, { attributes: { exclude: ['password'] } });
            return users;
    },
};

module.exports = userService;
