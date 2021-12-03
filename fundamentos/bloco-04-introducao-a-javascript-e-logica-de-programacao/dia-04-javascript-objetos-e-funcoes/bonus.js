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

// Exercício bônus 3
console.log("Exercício bônus 3:\n");

function calcularFrutas(frutas) {
  let frutasTotais = {};
  for (let i = 0; i < frutas.length; i += 1) {
    if (frutasTotais[frutas[i]] === undefined) {
      frutasTotais[frutas[i]] = 1;
    } else {
      frutasTotais[frutas[i]] += 1;
    }
  }
  return frutasTotais;
}

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
let frutasTotais = calcularFrutas(basket);

let mensagem = 'Sua cesta possui: ';
for (let fruta in frutasTotais) {
  mensagem += frutasTotais[fruta] + ' ' + fruta + 's, ';
}
mensagem = mensagem.substr(0, mensagem.length - 2);
console.log(mensagem);

console.log(linha);

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// Exercício bônus 4
console.log("Exercício bônus 4:\n");

let nome = moradores.blocoDois[1].nome;
let sobrenome = moradores.blocoDois[1].sobrenome;
let andar = moradores.blocoDois[1].andar;
let apartamento = moradores.blocoDois[1].apartamento;

console.log('O morador do bloco 2 de nome ' + nome + ' ' + sobrenome + ' mora no ' + andar + 'º andar, apartamento ' + apartamento);

console.log(linha);

// Exercício bônus 5
console.log("Exercício bônus 5:");

for (let bloco in moradores) {
  console.log('\nMoradores do ' + bloco + ':');
  for (let morador of moradores[bloco]) {
    console.log(morador.nome + ' ' + morador.sobrenome);
  }
}

console.log(linha);
