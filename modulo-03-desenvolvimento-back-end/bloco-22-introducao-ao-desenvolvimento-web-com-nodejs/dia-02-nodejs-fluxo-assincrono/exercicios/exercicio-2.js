const calc = require('./exercicio-1');

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

calc(randomNumber(), randomNumber(), randomNumber())
  .then((result) => console.log(`Resultado: ${result}`))
  .catch((err) => console.log(`Erro: ${err}`));
