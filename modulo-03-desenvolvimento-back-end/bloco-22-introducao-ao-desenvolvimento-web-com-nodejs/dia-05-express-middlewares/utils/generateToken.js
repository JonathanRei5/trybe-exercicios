const crypto = require('crypto');
const { saveToken } = require('./handleTokens');

generateToken = async () => {
  const token = crypto.randomBytes(8).toString('hex');
  await saveToken(token);
  return token;
}

module.exports = generateToken;
