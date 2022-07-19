require('dotenv').config();

const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    req.tokenPayload = data;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token não encontrado ou informado' });
  }
};

module.exports = validateToken;
