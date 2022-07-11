const { Router } = require('express');
const Patient = require('../controllers/Patient');

const patientsRouter = Router();

patientsRouter.get('/', Patient.listPatients);

module.exports = patientsRouter;
