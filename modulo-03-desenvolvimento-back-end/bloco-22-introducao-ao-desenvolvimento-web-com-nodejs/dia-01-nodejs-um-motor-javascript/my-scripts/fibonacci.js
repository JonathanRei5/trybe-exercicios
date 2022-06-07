const { questionInt } = require('readline-sync');

const fibonacci = (number) => {
  if(number < 1) return '';

  let prev = 1;
  let result = prev;
  let output = number === 1 ? '1' : '1, 1';
  
  for(let i = 3; i <= number; i += 1){
    const temp = result;
    result += prev;
    prev = temp;
    output = output.concat(`, ${result}`);
  }

  return output.concat(', ...');
};

const number = questionInt('Quantos números devem ser exibidos? ');

if(number > 0){
  console.log(fibonacci(number));
} else {
  console.log('Quantidade inválida.');
}
