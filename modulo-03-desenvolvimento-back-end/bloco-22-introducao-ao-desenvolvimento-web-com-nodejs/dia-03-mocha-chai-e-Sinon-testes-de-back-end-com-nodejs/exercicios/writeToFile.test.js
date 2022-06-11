const { expect } = require('chai');
const writeToFile = require('./writeToFile');

describe('Executa a função writeToFile', () => {
  it('espera "ok" como resposta', async () => {
    const respose = await writeToFile('test.txt', 'Apenas tentando');
    expect(respose).to.be.equal('ok');
  });
});
