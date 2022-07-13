const jwt = require('jsonwebtoken');
const { unauthorized } = require('../errors');

module.exports = {
  createToken: (data) => {
    const jwtOptions = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };
    return jwt.sign({ data }, process.env.JWT_SECRET, jwtOptions);
  },

  validateToken: (token) => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw unauthorized(error.message);
    }
  },
};
