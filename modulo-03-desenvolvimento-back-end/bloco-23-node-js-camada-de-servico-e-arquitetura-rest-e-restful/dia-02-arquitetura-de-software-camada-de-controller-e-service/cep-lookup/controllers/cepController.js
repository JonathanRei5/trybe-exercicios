const cepService = require('../services/cepService');

const getByCep = async (req, res) => {
  const { cep } = req.params;
  cepService.validateCep(cep);
  const result = await cepService.getByCep(cep);
  res.status(200).json(result);
};

module.exports = { getByCep };
