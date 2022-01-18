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

// Exercício 3
console.log(`\nExercício 3: -----------------------------------------------------------------------\n`);

const verifyAnswers = (rightAnswers, studentAnswers) => {
  let count = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    if (studentAnswers[i] === 'N.A') {
      continue;
    }
    if (studentAnswers[i] === rightAnswers[i]) {
      count += 1;
    } else {
      count -= 0.5;
    }
  }
  return count;
};

const answersResult = (rightAnswers, studentAnswers, verifyAnswers) => {
  if (!Array.isArray(rightAnswers) || !Array.isArray(studentAnswers)) {
    throw new Error('rightAnswers e studentAnswers devem ser um array');
  }
  if (rightAnswers.length !== studentAnswers.length) {
    throw new Error('rightAnswers e studentAnswers devem ter o mesmo tamanho');
  }
  return verifyAnswers(rightAnswers, studentAnswers);
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const result = answersResult(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers);
console.log(`A pontuação é ${result}`);
