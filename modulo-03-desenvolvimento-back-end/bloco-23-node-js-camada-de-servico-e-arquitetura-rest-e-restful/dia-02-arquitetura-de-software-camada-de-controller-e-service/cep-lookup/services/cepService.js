const joi = require('joi');
const cepModel = require('../models/cepModel');
const customError = require('../errors/customError');
const validateSchema = require('./validateSchema');

const cepDataSchema = joi.object({
  cep: joi.string().not().empty().required().pattern(/^\d{5}-\d{3}$/),
  logradouro: joi.string().not().empty().required(),
  bairro: joi.string().not().empty().required(),
  localidade: joi.string().not().empty().required(),
  uf: joi.string().not().empty().required(),
});

const validateCep = (cep) => {
  if (!cep.match(/^\d{5}-?\d{3}$/g)) {
    throw new customError(400, 'invalidData', 'CEP inválido');
  }
};

const validateCepData = (cepData) => validateSchema(cepDataSchema, cepData);

const removeHyphenFromCep = (cepData) => ({ ...cepData, cep: cepData.cep.replace('-', '') });
const addHyphenToCep = (cepData) => ({
  ...cepData,
  cep: cepData.cep.slice(0, 5).concat('-', cepData.cep.slice(5, 8))
});

const getByCep = async (cep) => {
  const result = await cepModel.getByCep(cep.replace('-', ''));
  if (!result) throw new customError(404, 'notFound', 'CEP não encontrado');
  return addHyphenToCep(result);
};

const add = async (cepData) => {
  const result = await cepModel.getByCep(cepData.cep.replace('-', ''));
  if (result) throw new customError(409, 'alreadyExists', 'CEP já existente');
  await cepModel.add(removeHyphenFromCep(cepData));
}

module.exports = { validateCep, validateCepData, getByCep, add };
