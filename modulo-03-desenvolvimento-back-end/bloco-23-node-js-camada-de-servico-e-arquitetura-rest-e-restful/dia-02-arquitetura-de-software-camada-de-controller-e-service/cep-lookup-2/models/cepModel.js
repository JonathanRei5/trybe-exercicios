const connection = require('./connection');

const getByCep = async (cep) => {
  const query = 'SELECT cep, logradouro FROM ceps WHERE cep=?';
  const [[result]] = await connection.execute(query, [cep]);
  return result;
};

const add = async (cepData, bairroId) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro_id) values (?,?,?)';
  const { cep, logradouro } = cepData;
  const [{ inserId }] = await connection
    .execute(query, [cep, logradouro, bairroId]);
  return inserId;
};

module.exports = { getByCep, add };
