const joi = require('joi');
const customError = require('../errors/customError');

const validateSchema = (schema, data) => {
  const { error } = schema.validate(data);
  if (error) throw new customError(400, 'invalidData', error.message);
};

module.exports = validateSchema;
