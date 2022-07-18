const users = require('./users.json');

const User = {
  findByPk: async (pk) => users.find(({ id }) => id === pk),
};

module.exports = {
  User,
};
