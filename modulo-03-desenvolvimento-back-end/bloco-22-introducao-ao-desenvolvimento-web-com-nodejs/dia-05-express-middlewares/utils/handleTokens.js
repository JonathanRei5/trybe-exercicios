const fs = require('fs/promises');

const TOKENS_FILE_PATH = './data/tokens.json';

const getTokens = async () => {
  const tokens = await fs.readFile(TOKENS_FILE_PATH, { encoding: 'utf-8' });
  return JSON.parse(tokens);
};

const saveToken = async (token) => {
  const tokens = await getTokens();
  tokens.push(token);
  await fs.writeFile(TOKENS_FILE_PATH, JSON.stringify(tokens));
};

module.exports = { getTokens, saveToken };
