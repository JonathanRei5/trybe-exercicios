const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
      publisher: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'books',
      underscored: true,
    }
  );

  return Book;
};
