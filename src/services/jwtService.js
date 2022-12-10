require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtService = {
  createToken: (data) => {
    const token = jwt.sign({ data }, process.env.JWT_SECRET);
    return token;
  },
  validateToken: (token) => {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      console.log(data);
      return data;
    } catch (e) {
      const error = new Error('Faça login');
      error.name = 'UnauthorizedError';
      throw error; 
    }
  },
};

module.exports = jwtService;
