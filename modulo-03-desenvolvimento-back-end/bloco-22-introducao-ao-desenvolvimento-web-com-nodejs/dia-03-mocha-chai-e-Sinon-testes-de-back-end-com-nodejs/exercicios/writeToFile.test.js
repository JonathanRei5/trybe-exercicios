const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs/promises');
const writeToFile = require('./writeToFile');

sinon.stub(fs, 'writeFile').returns('ok');

describe('Executa a função writeToFile', () => {
  it('espera "ok" como resposta', async () => {
    const respose = await writeToFile('exercicios/test.txt', 'Apenas tentando');
    expect(respose).to.be.equal('ok');
  });
});
