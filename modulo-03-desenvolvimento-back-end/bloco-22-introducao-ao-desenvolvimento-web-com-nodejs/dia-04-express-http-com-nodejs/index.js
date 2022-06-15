const fs = require('fs/promises');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await fs.readFile('data/simpsons.json', { encoding: 'utf-8' });
    res.json({ simpsons: JSON.parse(simpsons) });
  } catch (erro) {
    res.status(500).end();
  }
});

app.get('/simpsons/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const simpsons = JSON
      .parse(await fs.readFile('data/simpsons.json', { encoding: 'utf-8' }));
    const foundSimpson = simpsons.find((simpsons) => simpsons.id === id);
    if (foundSimpson) res.json(foundSimpson);
    res.status(404).send({ message: 'simpson not found' });
  } catch (erro) {
    res.status(500).end();
  }
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!` });
  res.status(401).json({ message: 'Unauthorized' });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
