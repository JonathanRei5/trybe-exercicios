const { conflict } = require('../errors');
const { User } = require('../models');

module.exports = {
  usernameAlreadyExists: async (username) => {
    const user = await User.getByUsername(username);
    if (user) throw conflict('user already exists');
  },

  create: async (user) => {
    const admin = Math.floor(Math.random() * 100) > 50;
    const createdUser = await User.create({ ...user, admin });
    return createdUser;
  },
};
