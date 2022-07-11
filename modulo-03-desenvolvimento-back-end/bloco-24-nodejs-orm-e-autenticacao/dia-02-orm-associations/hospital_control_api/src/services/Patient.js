const { Patient, Plan, Surgery } = require('../database/models');

module.exports = {
  listPatients: async (withPlan, withSurgeries, { planId } = {}) => {
    const include = [];
    const where = {};
    if (withPlan) include.push({ model: Plan, as: 'plan' });
    if (withSurgeries) include.push({
      model: Surgery,
      as: 'surgeries',
      through: { attributes: [] },
    });
    if (planId) where.planId = planId;

    const patients = await Patient.findAll({
      attributes: { exclude: ['plan_id', 'planId'] },
      include,
      where,
    });

    return patients;
  },
};
