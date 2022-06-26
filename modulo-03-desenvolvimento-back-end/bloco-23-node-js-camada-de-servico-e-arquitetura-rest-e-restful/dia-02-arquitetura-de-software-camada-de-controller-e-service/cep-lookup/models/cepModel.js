const connection = require('./connection');

const getByCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep=?';
  const [[result]] = await connection.execute(query, [cep]);
  return result;
};

const add = async (cepData) => {
  const query = `
    INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) values (?,?,?,?,?)
  `;
  const { cep, logradouro, bairro, localidade, uf } = cepData;
  const [{ inserId }] = await connection
    .execute(query, Object.values([cep, logradouro, bairro, localidade, uf]));
  return inserId;
};

module.exports = { getByCep, add };
