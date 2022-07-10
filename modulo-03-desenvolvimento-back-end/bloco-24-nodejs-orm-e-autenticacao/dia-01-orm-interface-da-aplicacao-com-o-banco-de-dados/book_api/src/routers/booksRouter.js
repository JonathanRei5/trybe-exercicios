const { Router } = require('express');
const BooksController = require('../controllers/BooksController');

const booksRouter = Router();

booksRouter.get('/', BooksController.getAll);
booksRouter.get('/:id', BooksController.getById);
booksRouter.post('/', BooksController.create);
booksRouter.put('/:id', BooksController.update);
booksRouter.delete('/:id', BooksController.remove);

module.exports = booksRouter;
