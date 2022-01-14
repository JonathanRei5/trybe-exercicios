const LINHA = '-----------------------------------------------------------------------------'

// Exercício 1 -------------------------------------------------------------------------
console.log(`\n${LINHA}\nExercício 1\n`);

let fatorialDe = (numero) => {
  let fatorial = 1;
  for (let i = numero; i > 0; i -= 1) {
    fatorial *= i;
  }
  return fatorial;
};

const numero = 4;
let fatorial = fatorialDe(numero);
console.log(`${numero}! = ${fatorial}`);

// Exercício 1 Bônus -------------------------------------------------------------------------
console.log(`\n${LINHA}\nExercício 1 Bônus\n`);

fatorialDe = (numero) => (numero > 1) ? numero * fatorialDe(numero - 1) : numero;

fatorial = fatorialDe(numero);
console.log(`${numero}! = ${fatorial}`);
