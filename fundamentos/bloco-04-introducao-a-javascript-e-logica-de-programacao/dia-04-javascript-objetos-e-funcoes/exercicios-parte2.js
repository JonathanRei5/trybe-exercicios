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

console.log("osso é palíndromo? " + verificaPalindromo("osso"));
console.log("javascript é palíndromo? " + verificaPalindromo("javascript"));

console.log(linha);
