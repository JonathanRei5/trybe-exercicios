const express = require('express');
const bodyParser = require('body-parser');
const validateSalesRegister = require('./validations/validateSalesRegister');
const validateSignup = require('./validations/validateSignup');
const validateAuthorization = require('./validations/validateAuthorization');
const generateToken = require('./utils/generateToken');

const app = express();
app.use(bodyParser.json());

app.post('/signup', validateSignup, async (_req, res) => {
  res.status(200).json({ token: await generateToken() });
});

app.post('/sales', validateAuthorization, validateSalesRegister, (_req, res) => {
  res.status(201).json({ "message": "Venda cadastrada com sucesso" });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
