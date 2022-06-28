const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: process.env.DB_USER || 'root', // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: process.env.DB_PASSWORD || 'senha123', // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: process.env.DB_NAME || 'rest_exercicios'
});

module.exports = connection;
