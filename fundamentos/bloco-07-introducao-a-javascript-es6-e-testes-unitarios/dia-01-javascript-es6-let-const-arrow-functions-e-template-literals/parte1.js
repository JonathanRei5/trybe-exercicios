const LINHA = '-----------------------------------------------------------------------------'

// Exercício 1 -------------------------------------------------------------------------
console.log(`${LINHA}\nExercício 1\n`);
{
  const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }
  testingScope(true);
}

// Exercício 2 -------------------------------------------------------------------------
console.log(`${LINHA}\nExercício 2\n`);
{
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const ordenarArray = array => {
    for (let i = 0; i < array.length; i += 1) {
      for (let j = 0; j < array.length - i; j += 1) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
  ordenarArray(oddsAndEvens);

  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
}

// Exercício 2 Bônus -------------------------------------------------------------------
console.log(`${LINHA}\nExercício 2 Bônus\n`);
{
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const ordenarArray2 = array => array.sort((a, b) => a - b);
  ordenarArray2(oddsAndEvens);

  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
}
