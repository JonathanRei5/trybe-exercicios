const { authService } = require('../services');
const { jwtService } = require('../services');

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body;
    const user = authService.login(username, password);
    const token = jwtService.createToken(user);
    res.status(200).json({ token });
  },
};
