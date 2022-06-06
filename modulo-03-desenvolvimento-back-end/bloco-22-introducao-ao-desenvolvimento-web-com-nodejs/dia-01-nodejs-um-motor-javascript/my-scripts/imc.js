const { questionFloat } = require('readline-sync');

const height = questionFloat('Qual sua altura? ');
const weight = questionFloat('Qual seu peso? ');

const imc = weight/height**2;

console.log('-----------------------------');
console.log(`Altura = ${height.toFixed(2)} m`);
console.log(`  Peso = ${weight.toFixed(2)} kg`);
console.log(`   IMC = ${imc.toFixed(2)}`);
