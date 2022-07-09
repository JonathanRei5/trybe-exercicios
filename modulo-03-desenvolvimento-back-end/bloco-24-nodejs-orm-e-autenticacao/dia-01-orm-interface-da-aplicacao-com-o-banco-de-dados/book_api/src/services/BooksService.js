const { Book } = require('../database/models');

module.exports = {
  getAll: async () => {
    const books = await Book.findAll();
    return books;
  },
};
