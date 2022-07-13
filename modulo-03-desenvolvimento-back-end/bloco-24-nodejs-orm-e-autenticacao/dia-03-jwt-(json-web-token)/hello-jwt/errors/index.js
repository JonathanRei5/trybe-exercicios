const CustomError = require('./customError');

module.exports = {
  unauthorized: (message) => {
    return new CustomError(401, message || 'Usuário não existe ou senha inválida');
  },
  forbidden: (message) => {
    return new CustomError(403, message || 'Acesso restrito');
  },
  conflict: (message) => {
    return new CustomError(409, message || 'Usuário já existe');
  },
};
