// Exercício 1
console.log(`\nExercício 1: -----------------------------------------------------------------------\n`);

const newPerson = (fullName) => (
  {
    fullName,
    email: `${fullName.replace(/ /g, '_')}@trybe.com`,
  }
);

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(newPerson));

// Exercício 2
console.log(`\nExercício 2: -----------------------------------------------------------------------\n`);

const checkNumber = (drawNumber, betNumber) => drawNumber === betNumber;

const drawResult = (betNumber, verify) => {
  const drawNumber = Math.floor(Math.random() * 5) + 1;
  return verify(drawNumber, betNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(drawResult(2, checkNumber));
