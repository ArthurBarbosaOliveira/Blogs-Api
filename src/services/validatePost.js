const { validatePost } = require('./joi');

module.exports = (req, res, next) => {
  const member = req.body;
  const { error } = validatePost.validate(member);
  if (error) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  next();
};
