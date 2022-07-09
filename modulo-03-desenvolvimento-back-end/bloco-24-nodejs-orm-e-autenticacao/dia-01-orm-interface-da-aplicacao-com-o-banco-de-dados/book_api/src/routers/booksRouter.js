const { Router } = require('express');
const BooksController = require('../controllers/BooksController');

const booksRouter = Router();

booksRouter.get('/', BooksController.getAll);

module.exports = booksRouter;
