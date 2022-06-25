const express = require('express');

const PORT = 3000;

const app = express();

app.get('/ping', async (_req, res) => {
  res.status(200).json({ "message": "pong!" });
});

app.listen(PORT, () => console.log(`Aplicação ouvindo na porta ${PORT}`));
