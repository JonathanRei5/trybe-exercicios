const { sum } = require('./sum');

describe('Soma dois números:', () => {
  it('A soma de 4 + 5 deve ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('A soma de 0 + 0 deve ser 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('A soma de 4 + "5" deve lançar um erro', () => {
    expect(() => { sum(4, "5") }).toThrow(Error);
  });
  it('Ao tentar somar 4 + "5" um erro com a descrição "parameters must be numbers" deve ser lançado', () => {
    expect(() => { sum(4, "5") }).toThrow('parameters must be numbers');
  });
});
