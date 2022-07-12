const users = require('./data/users.json');

module.exports = {
  getByUsername: (username) => {
    const foundUser = users.find((user) => username === user.username);
    return foundUser || null;
  },
};
