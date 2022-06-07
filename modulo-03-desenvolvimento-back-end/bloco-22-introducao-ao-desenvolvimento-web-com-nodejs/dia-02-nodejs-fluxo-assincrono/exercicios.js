const areAllNumbers = (numbers) => {
  return !numbers.some((number) => typeof number !== 'number');
}

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

calc(5,5,'5')
  .then((result) => console.log(`1 - calc(5,5,'5') Resultado: ${result}`))
  .catch((err) => console.log(`1 - calc(5,5,'5') Erro: ${err}`));
calc(5,5,4)
  .then((result) => console.log(`2 - calc(5,5,4) Resultado: ${result}`))
  .catch((err) => console.log(`2 - calc(5,5,4) Erro: ${err}`));
calc(5,5,5)
  .then((result) => console.log(`3 - calc(5,5,5) Resultado: ${result}`))
  .catch((err) => console.log(`3 - calc(5,5,5) Erro: ${err}`));
