const { readFile, writeFile } = require('fs').promises;

const getAllSimpsons = async () => {
  const simpsonsString = await readFile('./simpsons.json', { encoding: 'utf8' });
  return JSON.parse(simpsonsString);
}

const showAllSimpsons = async () => {
  try {
    const simpsonsArray = await getAllSimpsons();
    simpsonsArray.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

const showOneSimpson = async (id) => {
  const simpsonsArray = await getAllSimpsons();

  const simpson = simpsonsArray.find(({ id: simpsonID }) => id === Number(simpsonID));

  if (simpson === undefined) throw new Error('id não encontrado');
  return simpson;
}

const removeSimpson = async (id) => {
  const simpsonsArray = await getAllSimpsons();

  const simpsons = simpsonsArray.filter(({ id: simpsonID }) => id !== Number(simpsonID));

  await writeFile('./simpsons.json', JSON.stringify(simpsons));

  return 'Arquivo alterado'
}

const createSimpsonFamily = async (...ids) => {
  const simpsonsArray = await getAllSimpsons();
  
  const simpsonFamily = simpsonsArray.filter(({id}) => ids.includes(Number(id)));
  await writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
  return 'Família Simpson criada';
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

createSimpsonFamily(1,2,3,4);
