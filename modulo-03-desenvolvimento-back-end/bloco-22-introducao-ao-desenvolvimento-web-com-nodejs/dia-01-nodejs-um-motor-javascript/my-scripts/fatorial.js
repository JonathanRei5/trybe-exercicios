const { questionInt } = require('readline-sync');

const factorial = (number) => {
  let result = number;
  for(let i = number-1; i > 0; i -= 1){
    result *= i;
  }
  return result;
};

const number = questionInt('Informe um número inteiro maior que 0: ');

if(number > 0){
  console.log(`O fatorial de ${number} é ${factorial(number)}`)
} else {
  console.log('Número inválido.')
}
