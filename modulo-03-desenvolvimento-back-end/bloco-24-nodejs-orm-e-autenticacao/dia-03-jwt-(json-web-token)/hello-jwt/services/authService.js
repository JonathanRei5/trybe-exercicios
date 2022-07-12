const { User } = require('../models');
const { unauthorized } = require('../errors');

module.exports = {
  login: (username, password) => {
    const user = User.getByUsername(username);
    if (!user || user.password !== password) throw unauthorized();
    const { admin } = user;
    return { username, admin };
  },
};
