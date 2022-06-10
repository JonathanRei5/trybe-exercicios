const { readFile, writeFile } = require('fs').promises;

const getAllCharacters = async (origin) => {
  const characters = await readFile(origin, { encoding: 'utf8' });
  return JSON.parse(characters);
}

const charactersInfo = async (origin) => {
  try {
    const characters = await getAllCharacters(origin);
    characters.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

const characterInfo = async (origin, id) => {
  const characters = await getAllCharacters(origin);
  const character = characters.find(({ id: characterID }) => id === Number(characterID));
  if (character === undefined) throw new Error('id não encontrado');
  return `${character.id} - ${character.name}`;
}

const removeCharacters = async (origin, ...ids) => {
  const characters = (await getAllCharacters(origin))
    .filter(({ id }) => !ids.includes(Number(id)));
  await writeFile(origin, JSON.stringify(characters));
}

const createSimpsonFamily = async (origin, destination, ...ids) => {
  const characters = await getAllCharacters(origin);

  const simpsonFamily = characters.filter(({ id }) => ids.includes(Number(id)));
  await writeFile(destination, JSON.stringify(simpsonFamily));
  return 'Família Simpson criada';
}

const addCharacter = async (characterName, origin, destination) => {
  const characters = await getAllCharacters(origin);
  const simpsonsFamily = await getAllCharacters(destination);

  const character = characters.find(({ name }) => characterName === name);
  if (character === undefined) throw new Error('Personagem não encontrado');

  simpsonsFamily.push(character);
  await writeFile(destination, JSON.stringify(simpsonsFamily));
  return 'Personagem adicionado';
}

const updateCharacter = async (oldCharacterId, newCharacterId, origin, destination) => {
  const characters = await getAllCharacters(origin);
  const simpsonsFamily = (await getAllCharacters(destination))
    .filter(({ id }) => oldCharacterId !== Number(id));

  const character = characters.find(({ id }) => newCharacterId === Number(id));
  if (character === undefined) throw new Error('Personagem não encontrado');

  simpsonsFamily.push(character);
  await writeFile(destination, JSON.stringify(simpsonsFamily));
  return 'Personagem atualizado';
}

charactersInfo('exercicio-4/simpsons.json');

characterInfo('exercicio-4/simpsons.json', 3)
  .then((simpson) => console.log(simpson))
  .catch((error) => console.log(error.message));

removeCharacters('exercicio-4/simpsons.json', 10, 6)
  .catch((error) => console.log(error.message));

createSimpsonFamily('exercicio-4/simpsons.json', 'exercicio-4/simpsonFamily.json',
  1, 2, 3, 4);

addCharacter('Nelson Muntz', 'exercicio-4/simpsons.json', 'exercicio-4/simpsonFamily.json');

updateCharacter(8, 5, 'exercicio-4/simpsons.json', 'exercicio-4/simpsonFamily.json');
