const joi = require('joi');
const cepModel = require('../models/cepModel');
const customError = require('../errors/customError');
const validateSchema = require('./validateSchema');

const cepDataSchema = joi.object({
  cep: joi.string().not().empty().required().pattern(/\d{5}-\d{3}/),
  logradouro: joi.string().not().empty().required(),
  bairro: joi.string().not().empty().required(),
  localidade: joi.string().not().empty().required(),
  uf: joi.string().not().empty().required(),
});

const validateCep = (cep) => {
  if (!cep.match(/\d{5}-?\d{3}/g)) {
    throw new customError(400, 'invalidData', 'CEP inválido');
  }
};

const validateCepData = (cepData) => validateSchema(cepDataSchema, cepData);

const getByCep = async (cep) => {
  const result = await cepModel.getByCep(cep.replace('-', ''));
  if (!result) throw new customError(404, 'notFound', 'CEP não encontrado');
  return result;
};

module.exports = { validateCep, validateCepData, getByCep };
