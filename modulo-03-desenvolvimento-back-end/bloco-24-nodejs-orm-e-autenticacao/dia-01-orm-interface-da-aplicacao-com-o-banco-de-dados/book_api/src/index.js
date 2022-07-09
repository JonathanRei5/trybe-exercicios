require('dotenv').config();
const booksRouter = require('./routers/booksRouter');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
