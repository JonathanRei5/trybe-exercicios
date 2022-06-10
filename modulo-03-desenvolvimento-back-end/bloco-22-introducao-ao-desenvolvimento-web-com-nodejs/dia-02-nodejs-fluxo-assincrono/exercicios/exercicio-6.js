const { question } = require('readline-sync');
const { readFile } = require('fs').promises;

const file = question('Qual arquivo deseja ler? ');

readFile(file, { encoding: 'utf8' })
  .then((fileContent) => { console.log('\n', fileContent); })
  .catch((error) => { console.log('Arquivo inexistente'); });
