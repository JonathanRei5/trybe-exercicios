let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let linha = "------------------------------------------------------------";

// Exercício 1
console.log(linha);
console.log("Exercício 1:");
for (let number of numbers)
    console.log(number);
console.log(linha);

// Exercício 2
console.log("Exercício 2:");
let soma = 0;
for (let number of numbers)
    soma += number;
console.log("Resultado da soma = " + soma);
console.log(linha);

// Exercício 3
console.log("Exercício 3:");
let media = 0;
for (let number of numbers)
    media += number;
media /= numbers.length;
console.log("Resultado da média = " + media);
console.log(linha);
