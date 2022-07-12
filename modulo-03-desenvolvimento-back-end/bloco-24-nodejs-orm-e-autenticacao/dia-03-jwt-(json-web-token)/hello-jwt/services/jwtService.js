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
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (_error) {
      throw unauthorized('Não autorizado, verifique seu token.');
    }
  },
};
