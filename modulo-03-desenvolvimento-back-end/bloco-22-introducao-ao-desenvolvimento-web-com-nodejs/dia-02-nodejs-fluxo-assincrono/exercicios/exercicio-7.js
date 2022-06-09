const { question } = require('readline-sync');
const { readFile, writeFile } = require('fs').promises;

const main = async () => {
  const file = question('Qual arquivo deseja utilizar? ');

  try {
    let fileContent = await readFile(file, { encoding: 'utf8' });

    const oldWord = question('Qual palavra deseja substituir? ');
    const newWord = question('Por qual palavra deseja substituir? ');

    fileContent = fileContent.replace(oldWord, newWord);

    console.log(`\n${fileContent}`);

    const destination = question('Qual é o nome do arquivo de destino? ');

    writeFile(destination, fileContent);
  } catch (error) {
    console.log('Arquivo inexistente');
  }
}

main();
