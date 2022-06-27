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
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
};

module.exports = { getByCep, add };
