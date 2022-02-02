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

// Exercício 6
console.log("Exercício 6:");
let imparesTotais = 0;
for (let number of numbers)
    if (!((number % 2) === 0))
        imparesTotais += 1;
if (imparesTotais > 0)
    console.log("O array contém " + imparesTotais + " valor(es) ímpar(es)");
else
    console.log("nenhum valor ímpar encontrado");
console.log(linha);

// Exercício 7
console.log("Exercício 7:");
let menor = numbers[0];
for (let i = 1; i < numbers.length; i += 1)
    if (numbers[i] < menor)
        menor = numbers[i];
console.log("Menor valor = ", menor);
console.log(linha);

// Exercício 8
console.log("Exercício 8:");
let arr = [];
for (let i = 1; i <= 25; i += 1)
    arr.push(i);
console.log(arr);
console.log(linha);

// Exercício 9
console.log("Exercício 9:");
let imprimir = "";
for (let i = 0; i < arr.length - 1; i += 1)
    imprimir += (arr[i] / 2) + ", ";
imprimir += (arr[arr.length - 1] / 2);
console.log(imprimir);
console.log(linha);

// Bônus
console.log("\nExercícios Bônus\n")

function ordenar(array, crescente) {
    for (let i = 0; i < array.length; i += 1) {
        let ordenado = true;
        for (let j = 1; j < (array.length - i); j += 1) {
            if (array[j - Number(!crescente)] < array[j - Number(crescente)]) {
                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
                ordenado = false;
            }
        }
        if (ordenado)
            break;
    }
}

//Exercício bônus 1
console.log(linha);
console.log("Exercício bônus 1:");
let array = numbers.slice();
ordenar(array, true);
console.log(array);
console.log(linha);

//Exercício bônus 2
console.log("Exercício bônus 2:");
array = numbers.slice();
ordenar(array, false);
console.log(array);
console.log(linha);

//Exercício bônus 3
console.log("Exercício bônus 3:");
array = [];
if (numbers.length > 0) {
    for (let i = 1; i < numbers.length; i += 1)
        array.push(numbers[i] * numbers[i - 1])
    array.push(numbers[numbers.length - 1] * 2);
}
console.log(array);
