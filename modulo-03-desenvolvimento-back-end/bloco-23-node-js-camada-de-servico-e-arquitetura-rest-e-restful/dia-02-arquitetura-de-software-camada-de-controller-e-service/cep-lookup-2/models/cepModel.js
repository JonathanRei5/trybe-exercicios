const connection = require('./connection');

const getByCep = async (cep) => {
  const query = 'SELECT cep, logradouro FROM ceps WHERE cep=?';
  const [[result]] = await connection.execute(query, [cep]);
  return result;
};

const add = async (cepData) => {
  const query = 'INSERT INTO ceps (cep, logradouro) values (?,?)';
  const { cep, logradouro } = cepData;
  const [{ inserId }] = await connection
    .execute(query, [cep, logradouro]);
  return inserId;
};

module.exports = { getByCep, add };
