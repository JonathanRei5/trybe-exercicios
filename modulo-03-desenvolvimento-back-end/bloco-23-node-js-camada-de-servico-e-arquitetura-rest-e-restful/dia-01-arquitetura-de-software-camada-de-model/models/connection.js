const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'jonathan',
  password: 'Senha*123',
  database: 'exercicios/23.1'
});

module.exports = connection;
