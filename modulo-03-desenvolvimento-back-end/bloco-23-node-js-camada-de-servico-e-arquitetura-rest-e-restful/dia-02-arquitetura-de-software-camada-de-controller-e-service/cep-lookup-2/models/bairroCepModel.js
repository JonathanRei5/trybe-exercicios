const connection = require('./connection');

const getBairroAndCepByCep = async (cep) => {
  const query = `
    SELECT c.cep, c.logradouro, b.bairro, b.localidade, b.uf FROM ceps as c
    INNER JOIN bairros as b
    ON c.bairro_id = b.id
    WHERE c.cep=?;
  `;
  const [[result]] = await connection.execute(query, [cep]);
  return result;
};

module.exports = { getBairroAndCepByCep };
