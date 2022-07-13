const { userService } = require("../services");
const { createToken } = require("../services/jwtService");
const { usernameAlreadyExists } = require("../services/userService");
const { validateUser } = require("../services/validations");

module.exports = {
  getUserAuthorization: (req, res) => {
    const { dataValues: user } = req;
    res.status(200).json(user);
  },

  create: async (req, res) => {
    validateUser(req.body);
    await usernameAlreadyExists(req.body.username);
    const createdUser = userService.create(req.body);
    const { username, admin } = createdUser;
    const token = createToken({ username, admin });
    res.status(201).json({ token });
  },
};
