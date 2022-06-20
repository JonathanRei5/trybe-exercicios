const express = require('express');
const bodyParser = require('body-parser');
const validateSalesRegister = require('./validations/validateSalesRegister');

const app = express();
app.use(bodyParser.json());

app.post('/sales', validateSalesRegister, (req, res) => {
  res.status(201).json({ "message": "Venda cadastrada com sucesso" })
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
