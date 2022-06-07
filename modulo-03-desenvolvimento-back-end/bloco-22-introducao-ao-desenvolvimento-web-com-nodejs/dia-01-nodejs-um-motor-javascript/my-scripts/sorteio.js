const { question, questionInt } = require('readline-sync');

const questionPlayAgain = () => {
  while(true){
    const playAgain = question('Jogar novamente? (s/n): ');

    if(playAgain.toLocaleLowerCase() === 's') return true;
    if(playAgain.toLocaleLowerCase() === 'n') return false;

    console.log('\nDesculpe não entendi');
    console.log('Digite S/s para jogar novamente');
    console.log('Ou N/n para parar\n');
  }
}

let play = true;

while(play) {
  const randomNumber =  Math.round(Math.random() * 10);
  const chosenNumber = questionInt('Escolha um número inteiro entre 0 e 10: ');

  if(chosenNumber === randomNumber){
    console.log('Parabéns, número correto!\n');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}\n`);
  }

  play = questionPlayAgain();
  console.log('');
}
