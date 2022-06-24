const connection = require('./connection');

const create = async (user) => {
  const query = 'INSERT INTO user (first_name, last_name, email, password) VALUES (?,?,?,?)';
  const { firstName, lastName, email, password } = user;
  const [metadata] = await connection
    .execute(query, [firstName, lastName, email, password]);
  return { id: metadata.insertId, ...user };
};

const getAll = async () => {
  const query = 'SELECT * FROM user';
  const [users] = await connection.execute(query);
  return users;
};

const findById = async (id) => {
  const query = 'SELECT * FROM user WHERE id = ?'
  const [user] = await connection.execute(query, [id]);
  if (user.length === 0) return null;
  return user[0];
};

const update = async (id, user) => {
  const query = `
    UPDATE user
    SET first_name=?, last_name=?, email=?
    WHERE id=?;
  `;
  const { firstName, lastName, email } = user;
  await connection.execute(query, [firstName, lastName, email, id]);
  return { id, firstName, lastName, email };
};

module.exports = { create, getAll, findById, update };
