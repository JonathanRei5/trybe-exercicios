const cepService = require('../services/cepService');

const getByCep = async (req, res) => {
  const { cep } = req.params;
  cepService.validateCep(cep);
  const result = await cepService.getByCep(cep);
  res.status(200).json(result);
};

const add = async (req, res) => {
  cepService.validateCepData(req.body);
  await cepService.add(req.body);
  const result = await cepService.getByCep(req.body.cep);
  res.status(201).json(result);
};

module.exports = { getByCep, add };
