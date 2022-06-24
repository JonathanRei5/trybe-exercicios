const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./services/userService');

const PORT = 3001;

const app = express();

app.use(bodyParser.json());

app.get('/user', async (_req, res) => {
  const users = await userService.getAll();
  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(id);
  if (user.error) return res.status(404).json(user);
  res.status(200).json(user)
});

app.post('/user', async (req, res) => {
  const user = req.body;
  const { error, message } = userService.isValid(user);
  if (error) return res.status(400).json({ error, message });
  const userCreated = await userService.create(user);
  res.status(201).json(userCreated);
});

app.put('/user/:id', async (req, res) => {
  const user = req.body;
  const { id } = req.params;

  const { error, message } = userService.isValid(user);
  if (error) return res.status(400).json({ error, message });

  const updatedUser = await userService.update(id, user);
  if (updatedUser.error) return res.status(404).json(updatedUser);

  res.status(200).json(updatedUser);
});

app.listen(PORT, () => console.log(`Aplicação ouvindo na porta ${PORT}`));
