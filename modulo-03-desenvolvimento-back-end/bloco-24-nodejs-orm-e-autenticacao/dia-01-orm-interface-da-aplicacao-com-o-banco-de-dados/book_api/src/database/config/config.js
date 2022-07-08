require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DB_DEVELOPMENT || "database_development",
    host: process.env.HOSTNAME || "127.0.0.1",
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DB_TEST || "database_test",
    host: process.env.HOSTNAME || "127.0.0.1",
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DB_PRODUCTION || "database_production",
    host: process.env.HOSTNAME || "127.0.0.1",
    dialect: 'mysql',
  },
};
