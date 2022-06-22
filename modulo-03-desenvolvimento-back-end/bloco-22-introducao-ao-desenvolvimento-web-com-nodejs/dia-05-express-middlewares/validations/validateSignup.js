const findEmptyKey = require('../utils/findEmptyKey');

const validateSignup = (req, res, next) => {
  const emptyField = findEmptyKey(req.body, 'email', 'password', 'firstName', 'phone');
  if (emptyField) return res.status(401).json({ message: 'missing fields' });
  next();
};

module.exports = validateSignup;
