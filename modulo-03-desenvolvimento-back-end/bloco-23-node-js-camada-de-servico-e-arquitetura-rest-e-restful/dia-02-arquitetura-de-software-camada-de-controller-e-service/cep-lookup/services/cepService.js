const cepModel = require('../models/cepModel');
const customError = require('../errors/customError');

const validateCep = (cep) => {
  if (!cep.match(/\d{5}-?\d{3}/g)) {
    throw new customError(400, 'invalidData', 'CEP inválido');
  }
};

const getByCep = async (cep) => {
  const result = await cepModel.getByCep(cep.replace('-', ''));
  if (!result) throw new customError(404, 'notFound', 'CEP não encontrado');
  return result;
};

module.exports = { validateCep, getByCep };
