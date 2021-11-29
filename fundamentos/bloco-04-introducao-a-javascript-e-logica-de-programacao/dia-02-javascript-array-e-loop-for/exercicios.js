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

// Exercício 4
console.log("Exercício 4:");
if (media > 20)
    console.log("valor maior que 20");
else
    console.log("valor menor ou igual a 20");
console.log(linha);

// Exercício 5
console.log("Exercício 5:");
let maior = numbers[0];
for (let i = 1; i < numbers.length; i += 1)
    if (numbers[i] > maior)
        maior = numbers[i];
console.log("Maior valor = ", maior);
console.log(linha);
