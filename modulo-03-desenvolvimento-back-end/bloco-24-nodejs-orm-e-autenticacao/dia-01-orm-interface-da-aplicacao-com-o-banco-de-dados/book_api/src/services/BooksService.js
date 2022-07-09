const { Book } = require('../database/models');

module.exports = {
  getAll: async () => {
    const books = await Book.findAll();
    return books;
  },

  getById: async (id) => {
    const book = await Book.findByPk(id);
    return book;
  },

  create: async (book) => {
    const createdBook = await Book.create(book);
    return createdBook;
  },

  update: async (id, book) => {
    const [totalBooksUpdated] = await Book.update(book, { where: { id } });
    return Boolean(totalBooksUpdated);
  },
};
