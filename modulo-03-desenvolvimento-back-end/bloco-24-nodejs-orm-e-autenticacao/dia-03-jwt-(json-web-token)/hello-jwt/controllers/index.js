const ping = require('./ping');
const authController = require('./authController');
const usersController = require('./userController');
const topSecretController = require('./topSecretController');

module.exports = {
  ping,
  authController,
  usersController,
  topSecretController,
};
