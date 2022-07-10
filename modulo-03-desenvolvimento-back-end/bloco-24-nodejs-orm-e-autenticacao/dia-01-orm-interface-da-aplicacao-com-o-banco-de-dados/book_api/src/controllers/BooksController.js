const BooksService = require('../services/BooksService');

module.exports = {
  getAll: async (req, res) => {
    const { author } = req.query;
    const books = author
      ? await BooksService.getByAuthor(author)
      : await BooksService.getAll();
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

  update: async (req, res) => {
    const { id } = req.params;
    const { body: book } = req;
    const updated = await BooksService.update(id, book);
    if (updated) return res.status(200).json({ "message": "Book updated!" });
    res.status(404).json({ "message": "Book not found!" });
  },

  remove: async (req, res) => {
    const { id } = req.params;
    const removed = await BooksService.remove(id);
    if (removed) return res.status(200).json({ "message": "Book removed!" });
    res.status(404).json({ "message": "Book not found!" });
  },
};
