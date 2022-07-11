const { Router } = require('express');
const Surgery = require('../controllers/Surgery');

const surgeriesRouter = Router();

surgeriesRouter.get('/:doctorName', Surgery.listSurgeriesByDoctorName);

module.exports = surgeriesRouter;
