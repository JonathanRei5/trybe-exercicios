const { Patient, Plan } = require('../database/models');

module.exports = {
  listPatients: async () => {
    const patients = await Patient.findAll({
      attributes: { exclude: ['plan_id', 'planId'] },
    });
    return patients;
  },

  listPatientsWithPlan: async () => {
    const patients = await Patient.findAll({
      attributes: { exclude: ['plan_id', 'planId'] },
      include: { model: Plan, as: 'plan' },
    });
    return patients;
  },
};
