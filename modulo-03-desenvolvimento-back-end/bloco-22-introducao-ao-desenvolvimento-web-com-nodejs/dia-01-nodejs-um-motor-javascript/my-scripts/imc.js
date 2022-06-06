const { questionFloat } = require('readline-sync');

const category = (imc) => {
  if(imc < 18.5) return 'Abaixo do peso (magreza)';
  else if(imc < 25) return 'Peso normal';
  else if(imc < 30) return 'Acima do peso (sobrepeso)';
  else if(imc < 35) return 'Obesidade grau I';
  else if(imc < 40) return 'Obesidade grau II';
  return 'Obesidade graus III e IV';
};

const height = questionFloat('Qual sua altura? ');
const weight = questionFloat('Qual seu peso? ');

const imc = weight/height**2;

console.log('-----------------------------');
console.log(`  Altura = ${height.toFixed(2)} m`);
console.log(`    Peso = ${weight.toFixed(2)} kg`);
console.log(`     IMC = ${imc.toFixed(2)}`);
console.log(`Situação = ${category(imc)}`);
