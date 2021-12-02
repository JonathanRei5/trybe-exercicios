const linha = "---------------------------------------------------------------------------";

// Exercício 1
console.log(linha);
console.log("Exercício 1:\n");

function verificaPalindromo(str) {
  const strArray = str.toLowerCase().split('');
  const strArrayInverso = str.toLowerCase().split('').reverse();
  let palindromo = true;
  for (let i = 0; i < strArray.length; i += 1) {
    if (strArray[0] !== strArrayInverso[0]) {
      palindromo = false;
      break;
    }
  }
  return palindromo;
}

console.log("arara é palíndromo? " + verificaPalindromo("arara"));
console.log("desenvolvimento é palíndromo? " + verificaPalindromo("desenvolvimento"));

console.log(linha);

// Exercício 2
console.log("Exercício 2:\n");

function indiceMaiorValor(arr) {
  let maiorValor = arr[0];
  let indice = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > maiorValor) {
      maiorValor = arr[i];
      indice = i;
    }
  }
  return indice;
}

let arr = [2, 3, 6, 7, 10, 1];
console.log("Array = " + arr);
console.log("Índice do maior valor = " + indiceMaiorValor(arr));

console.log(linha);
