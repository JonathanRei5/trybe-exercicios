const { readFile, writeFile } = require('fs').promises;

const getAllCharacters = async (origin) => {
  const simpsonsString = await readFile(origin, { encoding: 'utf8' });
  return JSON.parse(simpsonsString);
}

const showAllSimpsons = async () => {
  try {
    const simpsonsArray = await getAllCharacters('./simpsons.json');
    simpsonsArray.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

const showOneSimpson = async (id) => {
  const simpsonsArray = await getAllCharacters('./simpsons.json');

  const simpson = simpsonsArray.find(({ id: simpsonID }) => id === Number(simpsonID));

  if (simpson === undefined) throw new Error('id não encontrado');
  return simpson;
}

const removeCharacters = async (origin, ...ids) => {
  const characters = await getAllCharacters(origin);
  const newCharacters = characters.filter(({ id }) => !ids.includes(Number(id)));
  await writeFile(origin, JSON.stringify(newCharacters));
}

const createSimpsonFamily = async (...ids) => {
  const simpsonsArray = await getAllCharacters('./simpsons.json');

  const simpsonFamily = simpsonsArray.filter(({ id }) => ids.includes(Number(id)));
  await writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
  return 'Família Simpson criada';
}

const addCharacter = async (characterName, origin, destination) => {
  const simpsons = await getAllCharacters(origin);
  const simpsonsFamily = await getAllCharacters(destination);

  const simpson = simpsons.find(({ name }) => characterName === name);
  if (simpson === undefined) throw new Error('Personagem não encontrado');

  simpsonsFamily.push(simpson);
  await writeFile(destination, JSON.stringify(simpsonsFamily));
  return 'Personagem adicionado';
}

const updateCharacter = async (oldCharacterId, newCharacterId, origin, destination) => {
  const simpsons = await getAllCharacters(origin);
  const simpsonsFamily = (await getAllCharacters(destination))
    .filter(({ id }) => oldCharacterId !== Number(id));

  const simpson = simpsons.find(({ id }) => newCharacterId === Number(id));
  if (simpson === undefined) throw new Error('Personagem não encontrado');

  simpsonsFamily.push(simpson);
  await writeFile(destination, JSON.stringify(simpsonsFamily));
  return 'Personagem atualizado';
}

showAllSimpsons();

showOneSimpson(3)
  .then((simpson) => console.log(simpson))
  .catch((error) => console.log(error.message));

removeCharacters('./simpsons.json', 10, 6)
  .catch((error) => console.log(error.message));

createSimpsonFamily(1, 2, 3, 4);

addCharacter('Nelson Muntz', './simpsons.json', './simpsonFamily.json');

updateCharacter(8, 5, './simpsons.json', './simpsonFamily.json');
