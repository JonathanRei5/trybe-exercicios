const axios = require('axios').default;

const getCepInfo = async (cep) => {
  const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await axios.get(endpoint);
  return response.data.erro ? undefined : response.data;
}

module.exports = getCepInfo;
