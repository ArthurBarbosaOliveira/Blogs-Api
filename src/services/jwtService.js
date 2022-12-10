const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');

const jwtService = {
  createToken: (data) => {
    const token = jwt.sign({ data }, JWT_SECRET);
    return token;
  },
  validateToken: (token) => {
  try {
      const data = jwt.verify(token, JWT_SECRET);
      console.log(data);
      return data;
} catch (e) {
      const error = new Error('Faça login');
      error.name = 'UnauthorizedError';
      throw error; 
}
  },
  validateJwt: (req, res, next) => {
      const token = req.header('Authorization');
  if (!token) {
      return res.status(401)
    .json({ message: 'Token not found' });
}
  try {
      const check = jwt.verify(token, JWT_SECRET);
      req.user = check;
      return next();
} catch (e) {
      return res.status(401)
    .json({ message: 'Expired or invalid token' });
}
  },
};

module.exports = jwtService;
