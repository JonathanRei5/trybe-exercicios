const { writeFile, readFile } = require('fs').promises;

const writeWordsInFiles = async (...words) => {
  const promises = words
    .map((word, index) => writeFile(`exercicio-5/file${index + 1}.txt`, word));
  await Promise.all(promises);
}

const readWordsFromFiles = async (totalFiles) => {
  let promises = [];
  for (let fileIndex = 1; fileIndex <= totalFiles; fileIndex += 1) {
    promises.push(readFile(`exercicio-5/file${fileIndex}.txt`, { encoding: 'utf8' }));
  }
  const resolvedPromises = await Promise.all(promises);

  const text = resolvedPromises.join(' ');

  await writeFile(`exercicio-5/fileAll.txt`, text);
}

writeWordsInFiles('Finalmente', 'estou', 'usando', 'Promise.all', '!!!');
readWordsFromFiles(5);
