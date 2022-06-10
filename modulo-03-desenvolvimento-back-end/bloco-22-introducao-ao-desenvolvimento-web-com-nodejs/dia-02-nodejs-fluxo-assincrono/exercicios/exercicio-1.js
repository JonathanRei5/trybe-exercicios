const areAllNumbers = (numbers) => {
  return !numbers.some((number) => typeof number !== 'number');
}

const calc = (numA, numB, numC) => {
  return new Promise((resolve, reject) => {

    if (areAllNumbers([numA, numB, numC])) {
      const result = (numA + numB) * numC;
      if (result < 50) return reject('Valor muito baixo');
      resolve(result);
    }

    reject('Informe apenas números');
  });
}

module.exports = calc;
