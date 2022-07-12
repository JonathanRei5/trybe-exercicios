const fs = require('fs/promises');
const path = require('path');

const USERS_PATH = path.resolve('models', 'data', 'users.json');

module.exports = {
  getByUsername: async (username) => {
    const { data } = JSON.parse(await fs.readFile(USERS_PATH));
    const foundUser = data.find((user) => username === user.username);
    return foundUser || null;
  },
};
