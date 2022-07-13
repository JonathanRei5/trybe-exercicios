const { authService } = require('../services');
const { jwtService } = require('../services');
const { validateUser } = require('../services/validations');

module.exports = {
  login: async (req, res) => {
    validateUser(req.body);
    const { username, password } = req.body;
    const user = await authService.login(username, password);
    const token = jwtService.createToken(user);
    res.status(200).json({ token });
  },
};
