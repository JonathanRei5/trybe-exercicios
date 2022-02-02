const linha = "---------------------------------------------------------------------------";

// Para Fixar Objetos

// 1
console.log(linha);
console.log("Para fixar | Objetos 1:\n");
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 }
};
console.log("Objeto criado.");
console.log(linha);

// 2
console.log("Para fixar | Objetos 2:\n");
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");
console.log(linha);

// 3
console.log("Para fixar | Objetos 3:\n");
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log("Chave \"bestInTheWorld\" criada e array adicionado a ela.");
console.log(linha);

// 4
console.log("Para fixar | Objetos 4:\n");
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita melhor do mundo por " + player.bestInTheWorld.length + " vezes.");
console.log(linha);

// 5
console.log("Para fixar | Objetos 5:\n");
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");
console.log(linha);

// Para Fixar for/in

// 1
console.log(linha);
console.log("Para fixar | for/in 1:\n");
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};

for (let name in names) {
  console.log("Olá " + names[name]);
}
console.log(linha);

// 2
console.log("Para fixar | for/in 2:\n");
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(key + " = " + car[key]);
}
console.log(linha);
