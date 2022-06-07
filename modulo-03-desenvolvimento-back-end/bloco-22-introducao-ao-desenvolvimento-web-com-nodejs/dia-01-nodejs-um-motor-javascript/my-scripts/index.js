const { keyInSelect } = require('readline-sync');

console.log('Lista dos scripts disponíveis para executar:');

const scripts = ['IMC', 'Velocidade', 'Sorteio', 'Fatorial', 'Fibonacci'];

const scriptIndex = keyInSelect(scripts, 'Qual script executar?', {cancel: 'Cancelar'});
console.log('');

switch(scriptIndex){
  case 0:
    require('./imc');
    break;
  case 1:
    require('./velocidade');
    break;
  case 2:
    require('./sorteio');
    break;
  case 3:
    require('./fatorial');
    break;
  case 4:
    require('./fibonacci');
    break;
}
