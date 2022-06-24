const connection = require('./connection');

const create = async (user) => {
  const sql = 'INSERT INTO user (first_name, last_name, email, password) VALUES (?,?,?,?)';
  const { firstName, lastName, email, password } = user;
  const [metadata] = await connection
    .execute(sql, [firstName, lastName, email, password]);
  return { id: metadata.insertId, ...user };
};

const getAll = async () => {
  const sql = 'SELECT * FROM user';
  const [users] = await connection.execute(sql);
  return users;
};

module.exports = { create, getAll };
