const { Book } = require('../database/models');

module.exports = {
  getAll: async () => {
    const books = await Book.findAll({ order: ['title'] });
    return books;
  },

  getById: async (id) => {
    const book = await Book.findByPk(id);
    return book;
  },

  getByAuthor: async (author) => {
    const book = await Book.findAll({
      where: { author },
      order: ['title'],
    });
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

  remove: async (id) => {
    const totalBooksDestroyed = await Book.destroy({ where: { id } });
    return Boolean(totalBooksDestroyed);
  },
};
