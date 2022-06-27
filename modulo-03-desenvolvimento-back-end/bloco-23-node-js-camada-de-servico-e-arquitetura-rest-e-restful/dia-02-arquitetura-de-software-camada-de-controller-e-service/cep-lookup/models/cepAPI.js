const axios = require('axios').default;

const getCepInfo = async (cep) => {
  const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    return undefined;
  }
}

module.exports = getCepInfo;
