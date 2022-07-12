const CustomError = require('./customError');

module.exports = {
  unauthorized: (message) => {
    return new CustomError(401, message || 'Usuário não existe ou senha inválida');
  },
};
