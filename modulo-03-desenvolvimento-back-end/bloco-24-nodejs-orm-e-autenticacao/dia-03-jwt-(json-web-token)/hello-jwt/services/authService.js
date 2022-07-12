const { User } = require('../models');
const { unauthorized } = require('../errors');

module.exports = {
  login: async (username, password) => {
    const user = await User.getByUsername(username);
    if (!user || user.password !== password) throw unauthorized();
    const { admin } = user;
    return { username, admin };
  },
};
