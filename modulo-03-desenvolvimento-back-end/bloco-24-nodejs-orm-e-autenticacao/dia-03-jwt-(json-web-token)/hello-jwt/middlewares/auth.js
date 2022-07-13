const { jwtService } = require('../services');

module.exports = {
  validateToken: (req, _res, next) => {
    const { authorization } = req.headers;
    const { data } = jwtService.validateToken(authorization)
    req.dataValues = data;
    next();
  },
};
