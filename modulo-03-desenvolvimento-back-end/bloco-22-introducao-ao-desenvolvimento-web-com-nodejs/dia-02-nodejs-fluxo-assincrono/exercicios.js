const areAllNumbers = (numbers) => {
  return !numbers.some((number) => typeof number !== 'number');
}

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const calc = (numA, numB, numC) => {
  return new Promise((resolve, reject) => {

    if(areAllNumbers([numA, numB, numC])){
      const result = (numA + numB) * numC;
      if(result < 50) return reject('Valor muito baixo');
      resolve(result);
    }

    reject('Informe apenas números');
  });
}

// calc(randomNumber(),randomNumber(),randomNumber())
//   .then((result) => console.log(`Resultado: ${result}`))
//   .catch((err) => console.log(`Erro: ${err}`));

const main = async () => {
  try {
    const result = await calc(randomNumber(),randomNumber(),randomNumber());
    console.log(`Resultado: ${result}`);
  } catch(err) {
    console.log(`Erro: ${err}`);
  }
}

main();
