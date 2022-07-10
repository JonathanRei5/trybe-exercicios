require('dotenv').config();
require('express-async-errors');

const booksRouter = require('./routers/booksRouter');
const express = require('express');
const handleError = require('./middlewares/handleError');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/books', booksRouter);

app.use(handleError);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
