const moment = require('moment');

const checkEmptyField = (object) => {
  const { productName, infos } = object;
  if (productName === undefined) return 'productName';
  if (infos === undefined) return 'infos';
  const { saleDate, warrantyPeriod } = infos;
  if (saleDate === undefined) return 'saleDate';
  if (warrantyPeriod === undefined) return 'warrantyPeriod';
  return null;
}

const validateSalesRegister = (req, res, next) => {
  const emptyField = checkEmptyField(req.body);
  if (emptyField) {
    return res.status(400).json({ "message": `O campo ${emptyField} é obrigatório` });
  }

  const { productName, infos } = req.body;
  const { saleDate, warrantyPeriod } = infos;

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
