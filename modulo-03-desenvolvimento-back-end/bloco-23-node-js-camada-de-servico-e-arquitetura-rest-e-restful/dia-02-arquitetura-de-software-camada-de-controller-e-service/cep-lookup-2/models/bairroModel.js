const connection = require('./connection');

const add = async (data) => {
  const query = 'INSERT INTO bairros (bairro, localidade, uf) values (?,?,?)';
  const { bairro, localidade, uf } = data;
  const [{ insertId }] = await connection
    .execute(query, [bairro, localidade, uf]);
  return insertId;
};

module.exports = { add };
