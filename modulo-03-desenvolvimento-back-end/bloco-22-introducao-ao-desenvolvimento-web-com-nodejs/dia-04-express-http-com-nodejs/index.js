const express = require('express');

const app = express();

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
