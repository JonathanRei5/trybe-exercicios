const calc = require('./exercicio-1');

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const main = async () => {
  try {
    const result = await calc(randomNumber(), randomNumber(), randomNumber());
    console.log(`Resultado: ${result}`);
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

main();
