const { Patient, Plan, Surgery } = require('../database/models');

module.exports = {
  listPatients: async (withPlan, withSurgeries, { planId } = {}, { hideDoctor } = {}) => {
    const include = [];
    const where = {};
    const exclude = [];
    if (planId) where.planId = planId;
    if (hideDoctor) exclude.push('doctor');
    if (withPlan) include.push({ model: Plan, as: 'plan' });
    if (withSurgeries) include.push({
      model: Surgery,
      as: 'surgeries',
      through: { attributes: [] },
      attributes: { exclude },
    });

    const patients = await Patient.findAll({
      attributes: { exclude: ['plan_id', 'planId'] },
      include,
      where,
    });

    return patients;
  },

  createPatient: async (patient) => {
    const createdPatient = await Patient.create(patient);
    return createdPatient;
  },
};
