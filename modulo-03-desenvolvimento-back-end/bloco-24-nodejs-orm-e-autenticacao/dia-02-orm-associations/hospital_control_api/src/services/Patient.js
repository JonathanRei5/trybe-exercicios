const { Patient, Plan, Surgery } = require('../database/models');

module.exports = {
  listPatients: async (withPlan, withSurgeries) => {
    const include = [];
    if (withPlan) include.push({ model: Plan, as: 'plan' });
    if (withSurgeries) include.push({
      model: Surgery,
      as: 'surgeries',
      through: { attributes: [] },
    });

    const patients = await Patient.findAll({
      attributes: { exclude: ['plan_id', 'planId'] },
      include,
    });

    return patients;
  },
};
