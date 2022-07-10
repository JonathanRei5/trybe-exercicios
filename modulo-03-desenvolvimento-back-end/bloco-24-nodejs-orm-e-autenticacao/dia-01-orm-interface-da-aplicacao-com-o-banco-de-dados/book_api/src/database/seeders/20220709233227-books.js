'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'Era uma vez um desenvolvedor',
          author: 'Fulano',
          page_quantity: 154
        },
        {
          title: 'Depure ou morra tentando',
          author: 'Beltrano',
          page_quantity: 1341
        },
        {
          title: 'Como eu era antes de codar',
          author: 'Sicrano',
          page_quantity: 237
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
