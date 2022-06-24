const connection = require('./connection');

const create = async (user) => {
  const sql = 'INSERT INTO user (first_name, last_name, email, password) VALUES (?,?,?,?)';
  const { firstName, lastName, email, password } = user;
  const [metadata] = await connection
    .execute(sql, [firstName, lastName, email, password]);
  return { id: metadata.insertId, ...user };
};

module.exports = { create };
