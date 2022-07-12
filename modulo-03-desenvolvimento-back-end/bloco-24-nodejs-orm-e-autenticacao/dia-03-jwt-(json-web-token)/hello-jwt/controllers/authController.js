module.exports = {
  login: (_req, res) => {
    res.status(200).json({ message: 'Login feito' });
  },
};
