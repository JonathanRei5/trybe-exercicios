const { Surgery } = require('../database/models');

module.exports = {
  listSurgeriesByDoctorName: async (doctorName) => {
    const surgeries = await Surgery.findAll({
      where: { doctor: doctorName },
    });

    return surgeries;
  },
};
