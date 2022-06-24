const findEmptyKey = require('../utils/findEmptyKey');
const userModel = require('../models/userModel');

const error = (error, message = '') => ({
  error,
  message,
});

const errorFieldSize = (field, size) =>
  `O campo '${field}' deve ser uma string de ${size} ou mais caracteres`;

const check = {
  emptyKey: (user) => {
    const emptyKey = findEmptyKey(user, 'firstName', 'lastName', 'email', 'password');
    if (emptyKey) return error(true, `O campo '${emptyKey}' é obrigatório`);
    return error(false);
  },

  password: ({ password }) => {
    if (typeof password !== 'string' || password.length < 6) {
      return error(true, errorFieldSize('password', 6));
    }
    return error(false);
  },

  email: ({ email }) => {
    if (
      typeof email !== 'string'
      || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    ) {
      return error(true, "O campo 'email' deve ser informado corretamente");
    }
    return error(false);
  },

  name: ({ firstName, lastName }) => {
    if (typeof firstName !== 'string' || firstName.length < 3) {
      return error(true, errorFieldSize('firstName', 3));
    }
    if (typeof lastName !== 'string' || lastName.length < 3) {
      return error(true, errorFieldSize('lastName', 3));
    }
    return error(false);
  }
};

const errors = (user) => [
  check.emptyKey(user),
  check.name(user),
  check.email(user),
  check.password(user)
];

const isValid = (user) => {
  const foundError = errors(user).find(({ error }) => error);
  return foundError ? foundError : error(false);
}

const findById = async (id) => {
  const user = await userModel.findById(Number(id));
  return user || error(true, 'Usuário não encontrado');
};

const update = async (id, user) => {
  const foundUser = await findById(id);
  return foundUser.error ? foundUser : await userModel.update(id, user);
};

const create = (user) => userModel.create(user);

const getAll = () => userModel.getAll();

module.exports = { isValid, create, getAll, findById, update };
