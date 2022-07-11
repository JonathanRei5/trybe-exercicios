const Surgery = require('../services/Surgery');

module.exports = {
  listSurgeriesByDoctorName: async (req, res) => {
    const { doctorName } = req.params;
    const surgeries = await Surgery.listSurgeriesByDoctorName(doctorName);
    res.status(200).json(surgeries);
  },
};
