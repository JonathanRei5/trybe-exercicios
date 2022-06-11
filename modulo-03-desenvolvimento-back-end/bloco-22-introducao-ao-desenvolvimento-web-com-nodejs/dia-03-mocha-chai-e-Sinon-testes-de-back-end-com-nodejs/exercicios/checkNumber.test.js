const { expect } = require('chai');
const checkNumber = require('./checkNumber');

describe('Ao executar a função checkNumber', () => {
  describe('passando um número maior que 0 como parâmetro', () => {
    it('a reposta de ser "positivo"', () => {
      const response = checkNumber(10);
      expect(response).to.be.equal("positivo");
    });
  });

  describe('passando um número menor que 0 como parâmetro', () => {
    it('a reposta de ser "negativo"', () => {
      const response = checkNumber(-10);
      expect(response).to.be.equal("negativo");
    });
  });

  describe('passando um número igual a 0 como parâmetro', () => {
    it('a reposta de ser "neutro"', () => {
      const response = checkNumber(0);
      expect(response).to.be.equal("neutro");
    });
  });

  describe('passando um parâmetro que não é número', () => {
    it('a reposta de ser "o valor deve ser um número"', () => {
      const response = checkNumber('abc');
      expect(response).to.be.equal("o valor deve ser um número");
    });
  });
});
