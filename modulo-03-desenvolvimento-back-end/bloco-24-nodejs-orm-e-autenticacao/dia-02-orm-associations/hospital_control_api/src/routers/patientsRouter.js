const { Router } = require('express');
const Patient = require('../controllers/Patient');

const patientsRouter = Router();

patientsRouter.get('/', Patient.listPatients);
patientsRouter.post('/', Patient.createPatient);

module.exports = patientsRouter;
