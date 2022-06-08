const { readFile, writeFile } = require('fs').promises;

const showAllSimpsons = async () => {
  try {
    const simpsonsString = await readFile('./simpsons.json', { encoding: 'utf8' });
    const simpsonsArray = JSON.parse(simpsonsString);
    simpsonsArray.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

const showOneSimpson = async (id) => {
  const simpsonsString = await readFile('./simpsons.json', { encoding: 'utf8' });
  const simpsonsArray = JSON.parse(simpsonsString);

  const simpson = simpsonsArray.find(({ id: simpsonID }) => id === Number(simpsonID));

  if (simpson === undefined) throw new Error('id não encontrado');
  return simpson;
}

const removeSimpson = async (id) => {
  const simpsonsString = await readFile('./simpsons.json', { encoding: 'utf8' });
  const simpsonsArray = JSON.parse(simpsonsString);

  const simpsons = simpsonsArray.filter(({ id: simpsonID }) => id !== Number(simpsonID));

  await writeFile('./simpsons.json', JSON.stringify(simpsons));

  return 'Arquivo alterado'
}

showAllSimpsons();

showOneSimpson(3)
  .then((simpson) => console.log(simpson))
  .catch((error) => console.log(error.message));

removeSimpson(10)
  .then((result) => {
    console.log(result);
    return removeSimpson(6);
  })
  .then((result) => {
    console.log(result);
    showAllSimpsons();
  })
  .catch((error) => console.log(error.message));
