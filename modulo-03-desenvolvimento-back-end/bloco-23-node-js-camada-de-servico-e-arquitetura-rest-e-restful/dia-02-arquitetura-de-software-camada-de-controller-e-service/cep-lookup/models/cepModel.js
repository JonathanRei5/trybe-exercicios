const connection = require('./connection');

const getByCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep=?';
  const [result] = await connection.execute(query, [cep]);
  return result;
};

module.exports = { getByCep };
