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
