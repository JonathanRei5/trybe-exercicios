const BooksService = require('../services/BooksService');

module.exports = {
  getAll: async (_req, res) => {
    const books = await BooksService.getAll();
    res.status(200).json(books);
  },
};
