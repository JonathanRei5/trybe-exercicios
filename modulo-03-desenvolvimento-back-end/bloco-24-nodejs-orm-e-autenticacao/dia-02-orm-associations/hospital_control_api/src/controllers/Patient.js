const Patient = require('../services/Patient');

module.exports = {
  listPatients: async (req, res) => {
    const { plan, surgeries } = req.query;
    const withPlan = plan === 'true';
    const withSurgeries = surgeries === 'true';
    const patients = await Patient.listPatients(withPlan, withSurgeries);
    res.status(200).json(patients);
  },
};
