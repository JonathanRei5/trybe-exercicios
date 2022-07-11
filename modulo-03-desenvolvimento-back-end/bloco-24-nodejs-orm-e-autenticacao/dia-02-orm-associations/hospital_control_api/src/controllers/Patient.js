const Patient = require('../services/Patient');

module.exports = {
  listPatients: async (req, res) => {
    const { plan } = req.query;
    const withPlan = plan === 'true';
    const patients = await Patient.listPatients(withPlan);
    res.status(200).json(patients);
  },
};
