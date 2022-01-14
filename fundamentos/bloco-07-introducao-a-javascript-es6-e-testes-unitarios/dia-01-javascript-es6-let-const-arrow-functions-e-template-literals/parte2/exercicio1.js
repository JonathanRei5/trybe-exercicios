const LINHA = '-----------------------------------------------------------------------------'

// Exercício 1 -------------------------------------------------------------------------
console.log(`\n${LINHA}\nExercício 1\n`);

const fatorialDe = (numero) => {
  let fatorial = 1;
  for (let i = numero; i > 0; i -= 1) {
    fatorial *= i;
  }
  return fatorial;
};

const numero = 4;
const fatorial = fatorialDe(numero);
console.log(`${numero}! = ${fatorial}`);
