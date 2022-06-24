const express = require('express');
const bodyParser = require('body-parser');
const userAPI = require('./service/userAPI');

const PORT = 3001;

const app = express();

app.use(bodyParser.json());

app.get('/user', async (_req, res) => {
  const users = await userAPI.getAll();
  res.status(200).json(users);
});

app.post('/user', async (req, res) => {
  const user = req.body;
  const { error, message } = userAPI.isValid(user);
  if (error) return res.status(400).json({ error, message });
  const userCreated = await userAPI.create(user);
  res.status(201).json(userCreated);
});

app.listen(PORT, () => console.log(`Aplicação ouvindo na porta ${PORT}`));
