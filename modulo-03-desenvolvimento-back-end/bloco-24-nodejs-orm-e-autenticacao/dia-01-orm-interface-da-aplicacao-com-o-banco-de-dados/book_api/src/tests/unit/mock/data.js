const books = [
  {
    id: 1,
    title: 'Era uma vez um desenvolvedor',
    author: 'Fulano',
    pageQuantity: 154,
    publisher: 'JRA Editora',
    createdAt: '2022-07-10T01:31:02.000Z',
    updatedAt: '2022-07-10T01:31:02.000Z'
  },
  {
    id: 2,
    title: 'Depure ou morra tentando',
    author: 'Beltrano',
    pageQuantity: 1341,
    publisher: 'JRA Editora',
    createdAt: '2022-07-10T01:31:02.000Z',
    updatedAt: '2022-07-10T02:02:14.000Z'
  },
  {
    id: 3,
    title: 'Como eu era antes de codar',
    author: 'Sicrano',
    pageQuantity: 237,
    publisher: 'JRA Editora',
    createdAt: '2022-07-10T01:31:02.000Z',
    updatedAt: '2022-07-10T01:31:02.000Z'
  }
];

const bookToCreate = {
  title: 'Era uma vez um desenvolvedor',
  author: 'Fulano',
  pageQuantity: 154,
  publisher: 'JRA Editora'
};

// Do not have "title"
const incorrectBookToCreate = {
  author: 'Fulano',
  pageQuantity: 154,
  publisher: 'JRA Editora'
};

const bookToUpdate = {
  pageQuantity: 209,
};

const incorrectBookToUpdate = {
  pages: 209, // "pages" does not exist
};

module.exports = {
  books,
  bookToCreate,
  incorrectBookToCreate,
  bookToUpdate,
  incorrectBookToUpdate
};
