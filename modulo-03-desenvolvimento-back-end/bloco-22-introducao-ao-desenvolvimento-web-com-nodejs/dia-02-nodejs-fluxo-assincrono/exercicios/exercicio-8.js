const { questionInt } = require('readline-sync');

const checkNumber = async (number) => {
  if (number <= 0) throw 'Número invalido.'
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  throw number;
}

const number = questionInt(
  'Informe um número inteiro maior que 0: ',
  { limitMessage: 'Informe um número válido, por favor.' }
);

checkNumber(number)
  .then((response) => { console.log(response); })
  .catch((error) => { console.log(error); });
