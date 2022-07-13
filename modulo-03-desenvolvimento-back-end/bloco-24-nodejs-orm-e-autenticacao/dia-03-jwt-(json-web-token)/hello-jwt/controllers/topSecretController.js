const { forbidden } = require("../errors");

module.exports = {
  getSecret: (req, res) => {
    const { dataValues: user } = req;
    if (user.admin) {
      return res.status(200).json({ secretInfo: "Peter Parker é o Homem-Arannha" });
    }
    throw forbidden('Restricted access');
  },
};
