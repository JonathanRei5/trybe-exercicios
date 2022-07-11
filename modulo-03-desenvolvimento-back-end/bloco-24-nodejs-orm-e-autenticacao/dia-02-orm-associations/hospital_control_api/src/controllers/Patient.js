const Patient = require('../services/Patient');

module.exports = {
  listPatients: async (req, res) => {
    const { plan, surgeries } = req.query;
    const { filter } = req.body;
    const { options } = req.body;
    const withPlan = plan === 'true';
    const withSurgeries = surgeries === 'true';
    const patients = await Patient.listPatients(withPlan, withSurgeries, filter, options);
    res.status(200).json(patients);
  },

  createPatient: async (req, res) => {
    const createdPatient = await Patient.createPatient(req.body);
    res.status(201).json(createdPatient);
  },
};
