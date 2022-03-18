const func = require('./service.js');

describe('Exercícios bloco 14 dia 2:', () => {
  test('Verifica se a função randomNumber está definida.',
    () => {
      expect(func.randomNumber).toBeDefined();
    })

  test('Verifica se a função randomNumber é chamada, qual seu retorno e quantas vezes é chamada.',
    () => {
      func.randomNumber = jest.fn().mockReturnValue(10);
      expect(func.randomNumber()).toBe(10);
      expect(func.randomNumber).toHaveBeenCalledTimes(1);
    })

  test('Verifica se a função randomNumber é chamada e a nova implementação de divisão é aplicada.',
    () => {
      func.randomNumber = jest.fn().mockImplementationOnce((numA, numB) => numA / numB);
      expect(func.randomNumber(10, 2)).toBe(5);
      expect(func.randomNumber).toHaveBeenCalledTimes(1);
      expect(func.randomNumber(10, 2)).not.toBe(5);
      expect(func.randomNumber).toHaveBeenCalledTimes(2);
    })

  test('Faz novas inplementações na função randomNumber e verifica seu retorno.',
    () => {
      func.randomNumber = jest.fn().mockImplementation(
        (numA, numB, numC) => numA * numB * numC
      );
      expect(func.randomNumber(10, 2, 5)).toBe(100);
      expect(func.randomNumber).toHaveBeenCalledTimes(1);
      func.randomNumber.mockReset();
      func.randomNumber.mockImplementation(
        (numA) => numA * 2
      );
      expect(func.randomNumber(10)).toBe(20);
      expect(func.randomNumber).toHaveBeenCalledTimes(1);
    })

})
