const func = require('./service.js');

describe('Exercícios bloco 14 dia 2:', () => {
  test('Verifica se a função randomNumber é chamada, qual seu retorno e quantas vezes é chamada',
    () => {
      expect(func.randomNumber).toBeDefined();
      func.randomNumber = jest.fn().mockReturnValue(10);
      expect(func.randomNumber()).toBe(10);
      expect(func.randomNumber).toHaveBeenCalledTimes(1);
    })
})
