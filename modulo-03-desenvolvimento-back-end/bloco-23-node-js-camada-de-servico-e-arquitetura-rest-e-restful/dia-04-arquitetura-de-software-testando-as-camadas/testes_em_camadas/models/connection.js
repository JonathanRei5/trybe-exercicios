const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'senha_muito_segura',
  database: process.env.DB_NAME || 'model_example'
});

module.exports = connection;
