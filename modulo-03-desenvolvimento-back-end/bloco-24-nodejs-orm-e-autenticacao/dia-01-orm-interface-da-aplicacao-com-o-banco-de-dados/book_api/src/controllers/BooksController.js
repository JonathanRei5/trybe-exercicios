const BooksService = require('../services/BooksService');

module.exports = {
  getAll: async (_req, res) => {
    const books = await BooksService.getAll();
    res.status(200).json(books);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const book = await BooksService.getById(id);
    if (book) return res.status(200).json(book);
    res.status(404).json({ "message": "Book not found" });
  },

  create: async (req, res) => {
    const { body: book } = req;
    const createdBook = await BooksService.create(book);
    res.status(201).json(createdBook);
  },
};
