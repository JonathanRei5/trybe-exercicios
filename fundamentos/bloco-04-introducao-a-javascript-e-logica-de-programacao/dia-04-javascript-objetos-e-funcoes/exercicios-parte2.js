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

// Exercício 3
console.log("Exercício 3:\n");

function indiceMenorValor(arr) {
  let menorValor = arr[0];
  let indice = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < menorValor) {
      menorValor = arr[i];
      indice = i;
    }
  }
  return indice;
}

arr = [2, 4, 6, 7, 10, 0, -3];
console.log("Array = " + arr);
console.log("Índice do menor valor = " + indiceMenorValor(arr));

console.log(linha);

// Exercício 4
console.log("Exercício 4:\n");

function maiorNome(nomes) {
  let nome = nomes[0];
  let caracteresTotais = nome.length;
  for (let i = 1; i < nomes.length; i += 1) {
    if (nomes[i].length > caracteresTotais) {
      nome = nomes[i];
      caracteresTotais = nome.length;
    }
  }
  return nome;
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log("Maior nome = " + maiorNome(nomes));

console.log(linha);
