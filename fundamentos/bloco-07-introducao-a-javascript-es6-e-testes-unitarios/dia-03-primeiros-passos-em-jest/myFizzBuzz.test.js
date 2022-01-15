const { myFizzBuzz } = require('./myFizzBuzz');

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número:',
  () => {
    it('Ao receber o número 15 deve retornar a string "fizzbuzz"', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('Ao receber o número 9 deve retornar a string "fizz"', () => {
      expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('Ao receber o número 10 deve retornar a string "buzz"', () => {
      expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('Ao receber o número 7 deve retornar o número 7', () => {
      expect(myFizzBuzz(7)).toBe(7);
    });
    it('Ao receber a string "10" deve retornar false', () => {
      expect(myFizzBuzz("10")).toBe(false);
    });
  });
