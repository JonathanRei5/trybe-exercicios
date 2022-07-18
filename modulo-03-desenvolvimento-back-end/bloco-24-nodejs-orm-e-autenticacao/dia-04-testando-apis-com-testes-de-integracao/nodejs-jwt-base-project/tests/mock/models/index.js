const users = require('./users.json');

const User = {
  findByPk: async (pk) => users.find(({ id }) => id === Number(pk)),
  findOne: async ({ where: { username } }) => users
    .find((user) => username === user.username),
};

module.exports = {
  User,
};
