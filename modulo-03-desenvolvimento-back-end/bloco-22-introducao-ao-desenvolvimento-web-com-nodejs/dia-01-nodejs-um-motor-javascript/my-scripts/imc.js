const height = Math.random()*2.5;
const weight = Math.random()*400;

const imc = weight/height**2;

console.log(`  Peso = ${weight.toFixed(2)} kg`);
console.log(`Altura = ${height.toFixed(2)} m`);
console.log(`   IMC = ${imc.toFixed(2)}`);