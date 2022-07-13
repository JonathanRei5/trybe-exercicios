const fs = require('fs/promises');
const path = require('path');

const USERS_PATH = path.resolve('models', 'data', 'users.json');

module.exports = {
  getByUsername: async (username) => {
    const { data } = JSON.parse(await fs.readFile(USERS_PATH));
    const foundUser = data.find((user) => username === user.username);
    return foundUser || null;
  },

  create: async (user) => {
    const users = JSON.parse(await fs.readFile(USERS_PATH));
    users.lastId += 1;
    const newUser = { id: users.lastId, ...user };
    users.data.push(newUser);
    await fs.writeFile(USERS_PATH, JSON.stringify(users));
    return newUser;
  },
};
