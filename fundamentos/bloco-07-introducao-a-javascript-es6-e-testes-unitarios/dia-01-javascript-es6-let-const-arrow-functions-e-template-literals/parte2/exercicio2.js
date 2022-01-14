const LINHA = '-----------------------------------------------------------------------------'

// Exercício 2 -------------------------------------------------------------------------
console.log(`\n${LINHA}\nExercício 2\n`);

const maiorPalavra = (frase) => {
  const palavras = frase.split(' ');
  let maiorPalavra = '';
  palavras.forEach(palavra => {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }
  });
  return maiorPalavra;
};

const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';
const fraseMaiorPalavra = maiorPalavra(frase);
console.log(`A maior palavra da frase "${frase}" é "${fraseMaiorPalavra}"`);
