const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send(process.env.RESPONSE_MESSAGE);
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
