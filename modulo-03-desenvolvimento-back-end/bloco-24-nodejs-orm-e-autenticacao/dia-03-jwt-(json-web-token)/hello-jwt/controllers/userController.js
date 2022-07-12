module.exports = {
  getUserAuthorization: (req, res) => {
    const { dataValues: user } = req;
    res.status(200).json(user);
  },
};
