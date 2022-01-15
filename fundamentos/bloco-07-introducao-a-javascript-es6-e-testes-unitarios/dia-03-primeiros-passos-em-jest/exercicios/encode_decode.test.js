const { encode, decode } = require('./encode_decode');

describe(`A função encode recebe uma string e altera as letras a,e,i,o e u por 1,2,3,4 e 5 respectivamente.
A função decode recebe uma string e altera os números 1,2,3,4 e 5 por a,e,i,o e u respectivamente.`,
  () => {
    it('Testa se encode e decode são definidas.', () => {
      expect(encode).toBeDefined();
      expect(decode).toBeDefined();
    });
    it('Testa se encode e decode são funções.', () => {
      expect(typeof encode === 'function').toBe(true);
      expect(typeof decode === 'function').toBe(true);
    });
    it('Ao chamar encode("a, e, i, o, u") deve retornar "1, 2, 3, 4, 5"', () => {
      expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });
    it('Ao chamar decode("1, 2, 3, 4, 5") deve retornar "a, e, i, o, u"', () => {
      expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    });
    it('Ao chamar encode("abcdefghijklmnopqrstuvwxyz") deve retornar "1bcd2fgh3jklmn4pqrst5vwxyz"', () => {
      expect(encode('abcdefghijklmnopqrstuvwxyz0123456789')).toBe('1bcd2fgh3jklmn4pqrst5vwxyz0123456789');
    });
    it('Ao chamar decode("0123456789") deve retornar "0aeiou6789"', () => {
      expect(decode('abcdefghijklmnopqrstuvwxyz0123456789')).toBe('abcdefghijklmnopqrstuvwxyz0aeiou6789');
    });
    it('Verifica se a quantidade de caracteres da string retornada por encode é igual a 36', () => {
      expect(encode('abcdefghijklmnopqrstuvwxyz0123456789').length).toBe(36);
    });
    it('Verifica se a quantidade de caracteres da string retornada por decode é igual a 36', () => {
      expect(decode('abcdefghijklmnopqrstuvwxyz0123456789').length).toBe(36);
    });
  });
