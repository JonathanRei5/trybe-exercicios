const fs = require('fs/promises');
const path = require('path');

module.exports = {
  getByUsername: async (username) => {
    let users = await fs.readFile(path.resolve('models', 'data', 'users.json'));
    users = JSON.parse(users);
    const foundUser = users.find((user) => username === user.username);
    return foundUser || null;
  },
};
