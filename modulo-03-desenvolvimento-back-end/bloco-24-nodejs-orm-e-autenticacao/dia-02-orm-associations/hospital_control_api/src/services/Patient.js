const { Patient, Plan, Surgery } = require('../database/models');

module.exports = {
  listPatients: async (withPlan) => {
    const include = [];
    if (withPlan) include.push({ model: Plan, as: 'plan' });

    const patients = await Patient.findAll({
      attributes: { exclude: ['plan_id', 'planId'] },
      include,
    });

    return patients;
  },
};
