require('dotenv').config();
require('express-async-errors');

const express = require('express');
const bodyParser = require('body-parser');
const cepController = require('./controllers/cepController');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.get('/ping', async (_req, res) => {
  res.status(200).json({ "message": "pong!" });
});

app.get('/cep/:cep', cepController.getByCep);
app.post('/cep', cepController.add);

app.use((err, _req, res, _next) => {
  const { name, status, error } = err;
  if (name === 'customError') return res.status(status).json({ error });
  res.status(500).json({
    error: { code: 'internalError', message: 'Erro interno do servidor' }
  });
});

app.listen(PORT, () => console.log(`Aplicação ouvindo na porta ${PORT}`));
