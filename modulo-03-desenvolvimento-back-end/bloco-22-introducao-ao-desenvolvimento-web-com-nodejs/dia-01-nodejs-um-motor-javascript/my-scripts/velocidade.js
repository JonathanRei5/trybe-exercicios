const { questionInt } = require('readline-sync');

const distance = questionInt('Qual é a distância? ');
const time = questionInt('Qual é o tempo? ');

const speed = distance/time;

console.log('-----------------------------');
console.log(` Distância = ${distance} m`);
console.log(`     Tempo = ${time} s`);
console.log(`Velocidade = ${speed.toFixed(2)} m/s`);
