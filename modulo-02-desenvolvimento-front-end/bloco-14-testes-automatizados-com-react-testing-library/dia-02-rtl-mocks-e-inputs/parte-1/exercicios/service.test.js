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

  test('Verifica se os mocks das funções toUpperCase, firstLetter e concat estão funcionando.',
    () => {
      expect(func.toUpperCase).toBeDefined();
      expect(func.firstLetter).toBeDefined();
      expect(func.concat).toBeDefined();

      jest.spyOn(func, 'toUpperCase');
      func.toUpperCase.mockImplementation((text) => text.toLowerCase());

      func.firstLetter = jest.fn().mockImplementation(
        (text) => text.length > 0 ? text[text.length - 1] : ''
      );

      func.concat = jest.fn().mockImplementation(
        (textA, textB, textC) => textA.concat(textB).concat(textC)
      );

      expect(func.toUpperCase('XABLAU')).toBe('xablau');
      expect(func.firstLetter('XABLAU')).toBe('U');
      expect(func.concat('XA', 'BL', 'AU')).toBe('XABLAU');
    })

  test('Verifica se a implementação da função toUpperCase foi restaurada.',
    () => {
      func.toUpperCase.mockRestore();
      expect(func.toUpperCase('xablau')).toBe('XABLAU');
    })

  test('Verifica se a função getDogPicture faz a requisição corretamente e retonar os valores esperados.',
    async () => {
      expect(func.getDogPicture).toBeDefined();
      expect(global.fetch).toBeDefined();
      jest.spyOn(global, 'fetch');
      const URL = 'https://dog.ceo/api/breeds/image/random';

      fetch.mockResolvedValueOnce({ json: async () => 'request sucess' });
      expect(await func.getDogPicture()).toBe('request sucess');
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(URL);

      fetch.mockRejectedValueOnce(Error('request failed'));
      expect(await func.getDogPicture()).toBe('request failed');
      expect(fetch).toHaveBeenCalledTimes(2);
    })
})
