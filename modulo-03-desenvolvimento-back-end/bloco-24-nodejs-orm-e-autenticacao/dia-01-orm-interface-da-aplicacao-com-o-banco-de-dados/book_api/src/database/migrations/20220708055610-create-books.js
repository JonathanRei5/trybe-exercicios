'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'books',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        author: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        pageQuantity: {
          type: Sequelize.INTEGER,
          allowNull: true,
          field: 'page_quantity',
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'created_at',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'updated_at',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};
