const myRemove = require('./myRemove').myRemove;

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array:', () => {
  it('Ao passar os parâmetros ([1, 2, 3, 4], 3) deve ser retornado o array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Ao passar os parâmetros ([1, 2, 3, 4], 3) NÃO deve ser retornado o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Ao passar os parâmetros ([1, 2, 3, 4], 5) deve ser retornado o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
