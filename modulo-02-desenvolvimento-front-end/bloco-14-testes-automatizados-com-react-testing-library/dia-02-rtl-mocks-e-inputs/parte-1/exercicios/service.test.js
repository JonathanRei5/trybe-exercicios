const func = require('./service.js');

describe('Exercícios bloco 14 dia 2:', () => {
  test('Verifica se a função randomNumber é chamada, qual seu retorno e quantas vezes é chamada',
    () => {
      expect(func.randomNumber).toBeDefined();
      func.randomNumber = jest.fn().mockReturnValue(10);
      expect(func.randomNumber()).toBe(10);
      expect(func.randomNumber).toHaveBeenCalledTimes(1);
    })

    test('Verifica se a função randomNumber é chamada e a nova implementação de divisão é aplicada',
    () => {
      expect(func.randomNumber).toBeDefined();
      func.randomNumber = jest.fn().mockImplementationOnce((numA, numB) => numA/numB);
      expect(func.randomNumber(10,2)).toBe(5);
      expect(func.randomNumber).toHaveBeenCalledTimes(1);
      expect(func.randomNumber(10,2)).not.toBe(5);
      expect(func.randomNumber).toHaveBeenCalledTimes(2);
    })


})
