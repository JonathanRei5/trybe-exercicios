const express = require('express');
const bodyParser = require('body-parser');
const validations = require('./validations');

const app = express();
app.use(bodyParser.json());
app.use(validations);

app.post('/sales', (req, res) => {
  res.status(201).json({ "message": "Venda cadastrada com sucesso" })
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
