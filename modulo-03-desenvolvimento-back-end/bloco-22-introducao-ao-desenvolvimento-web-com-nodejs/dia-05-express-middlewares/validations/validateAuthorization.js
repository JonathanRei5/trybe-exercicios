const { includesToken } = require('../utils/handleTokens');

const validateAuthorization = async (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!(await includesToken(token))) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
  next();
}

module.exports = validateAuthorization;
