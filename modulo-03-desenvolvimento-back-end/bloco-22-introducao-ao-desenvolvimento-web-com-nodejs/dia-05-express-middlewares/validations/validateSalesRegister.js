const moment = require('moment');
const findEmptyKey = require('../utils/findEmptyKey');

const validateSalesRegister = (req, res, next) => {
  const emptyField = findEmptyKey(req.body, 'productName', 'infos')
    || findEmptyKey(req.body.infos, 'saleDate', 'warrantyPeriod');
  if (emptyField) {
    return res.status(400).json({ "message": `O campo ${emptyField} é obrigatório` });
  }

  const { productName, infos: { saleDate, warrantyPeriod } } = req.body;

  if (productName.length < 4) {
    return res.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" });
  }
  if (!moment(saleDate, 'DD/MM/YYYY', true).isValid()) {
    return res.status(400).json({ "message": "O campo saleDate não é uma data válida" });
  }
  if (warrantyPeriod < 1 || warrantyPeriod > 3) {
    return res.status(400).json({ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" });
  }

  next();
}

module.exports = validateSalesRegister;
