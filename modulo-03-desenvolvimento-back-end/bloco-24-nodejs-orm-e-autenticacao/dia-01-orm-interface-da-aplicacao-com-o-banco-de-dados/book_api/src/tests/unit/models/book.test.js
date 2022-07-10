const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../database/models/book');

describe('Model Book', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });

  describe(`possui as propriedades "title", "author", "pageQuantity",
           "publisher", "createdAt" e "updatedAt"`, () => {
    ['title',
      'author',
      'pageQuantity',
      'publisher',
      'createdAt',
      'updatedAt'].forEach(checkPropertyExists(book));
  });
});
