const Patient = require('../services/Patient');

module.exports = {
  listPatients: async (req, res) => {
    const { plan } = req.query;
    const patients = plan === 'true'
      ? await Patient.listPatientsWithPlan()
      : await Patient.listPatients();
    res.status(200).json(patients);
  },
};
