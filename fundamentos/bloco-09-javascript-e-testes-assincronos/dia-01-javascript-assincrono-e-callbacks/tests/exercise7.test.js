const uppercase = require('../exercicios/exercise7');

test(`Verifica se a função callback de uppercase
recebe todas as letras de uma palavra em maiúsculas`, (done) => {
  uppercase('barabam', (strInUppercase) => {
    try {
      expect(strInUppercase).toBe('BARABAM');
      done();
    }
    catch (error) {
      done(error);
    }
  });
});
