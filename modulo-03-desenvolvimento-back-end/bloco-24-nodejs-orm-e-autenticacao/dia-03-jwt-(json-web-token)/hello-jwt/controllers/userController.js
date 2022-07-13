const { userService } = require("../services");
const { createToken } = require("../services/jwtService");
const { usernameAlreadyExists } = require("../services/userService");

module.exports = {
  getUserAuthorization: (req, res) => {
    const { dataValues: user } = req;
    res.status(200).json(user);
  },

  create: async (req, res) => {
    const { body } = req;
    await usernameAlreadyExists(body.username);
    const createdUser = userService.create(body);
    const { username, admin } = createdUser;
    const token = createToken({ username, admin });
    res.status(201).json({ token });
  },
};
