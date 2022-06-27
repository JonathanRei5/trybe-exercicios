const connection = require('./connection');

const add = async (data) => {
  const query = 'INSERT INTO bairros (bairro, localidade, uf) values (?,?,?)';
  const { bairro, localidade, uf } = data;
  const [{ insertId }] = await connection.execute(query, [bairro, localidade, uf]);
  return !insertId;
};

const search = async ({ bairro, localidade, uf }) => {
  const query = 'SELECT id FROM bairros WHERE bairro=? AND localidade=? AND uf=?';
  const [result] = await connection.execute(query, [bairro, localidade, uf]);
  return result;
}

module.exports = { add, search };
