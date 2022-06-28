require('dotenv').config();
require('express-async-errors');

const express = require('express');
const bodyParser = require('body-parser');
const productRoute = require('./routes/productRoute');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use('/products', productRoute);

app.use((err, _req, res, _next) => {
  const { name, status, error } = err;
  if (name === 'customError') return res.status(status).json({ error });
  res.status(500).json({
    error: { code: 'internalError', message: 'Erro interno do servidor' }
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
