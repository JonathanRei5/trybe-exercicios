const connection = require('./connection');

const add = async (data) => {
  const query = 'INSERT INTO bairros (bairro, localidade, uf) values (?,?,?)';
  const { bairro, localidade, uf } = data;
  const [{ inserId }] = await connection
    .execute(query, [bairro, localidade, uf]);
  return inserId;
};

module.exports = { add };
