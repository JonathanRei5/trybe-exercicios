const linha = "---------------------------------------------------------------------------";

// Bônus

// Exercício bônus 1
console.log(linha);
console.log("Exercício bônus 1:\n");

function romanoParaDecimal(romano) {
  let algarismosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let arrRomano = romano.toUpperCase().split('');
  let soma = 0;

  for (let i = 0; i < arrRomano.length; i += 1) {
    if ((i + 1) < arrRomano.length) {
      if (algarismosRomanos[arrRomano[i]] >= algarismosRomanos[arrRomano[i + 1]]) {
        soma += algarismosRomanos[arrRomano[i]];
        continue;
      }
      soma += algarismosRomanos[arrRomano[i + 1]] - algarismosRomanos[arrRomano[i]];
      i += 1;
      continue;
    }
    soma += algarismosRomanos[arrRomano[i]];
  }

  return soma;
}

let romano = 'MMMCMXXXIII';
console.log("Número romano = " + romano);
console.log("Número arábico = " + romanoParaDecimal(romano));
console.log(linha);

// Exercício bônus 2
console.log("Exercício bônus 2:\n");

function pegarPares(vector) {
  let arrayDePares = [];
  for (let i = 0; i < vector.length; i += 1) {
    for (let j = 0; j < vector[i].length; j += 1) {
      if ((vector[i][j] % 2) === 0) {
        arrayDePares.push(vector[i][j]);
      }
    }
  }
  return arrayDePares;
}
let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
console.log(pegarPares(vector));

console.log(linha);
