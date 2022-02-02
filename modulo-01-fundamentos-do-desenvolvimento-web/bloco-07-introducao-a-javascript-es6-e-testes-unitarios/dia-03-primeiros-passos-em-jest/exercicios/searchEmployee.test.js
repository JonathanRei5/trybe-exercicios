const searchEmployee = require('./searchEmployee');

describe('Verifica se um funcionário existe e retorna a informação solicitada sobre ele caso exista:',
  () => {
    it('Verifica se a função searchEmployee está definida.', () => {
      expect(searchEmployee).toBeDefined();
    });
    it('Verifica se searchEmployee é uma função.', () => {
      expect(typeof searchEmployee).toBe('function');
    });
    it('Ao receber uma ID inválida retorna "ID não identificada".', () => {
      expect(() => { searchEmployee('', 'firstName'); }).toThrow(Error('ID não identificada'));
      expect(() => { searchEmployee('aaaa-a', 'firstName'); }).toThrow(Error('ID não identificada'));
      expect(() => { searchEmployee('abcd-e', 'firstName'); }).toThrow(Error('ID não identificada'));
      expect(() => { searchEmployee('465434', 'firstName'); }).toThrow(Error('ID não identificada'));
      expect(() => { searchEmployee(null, 'firstName'); }).toThrow(Error('ID não identificada'));
      expect(() => { searchEmployee(undefined, 'firstName'); }).toThrow(Error('ID não identificada'));
    });
    it('Ao receber uma informação inválida retorna "Informação indisponível".', () => {
      expect(() => { searchEmployee('0000-0', ''); }).toThrow(Error('Informação indisponível'));
      expect(() => { searchEmployee('0000-0', 'jhsgdfhgsddfhj'); }).toThrow(Error('Informação indisponível'));
      expect(() => { searchEmployee('0000-0', null); }).toThrow(Error('Informação indisponível'));
      expect(() => { searchEmployee('0000-0', undefined); }).toThrow(Error('Informação indisponível'));
    });
    it('Ao receber uma ID e informação válida retorna a informação solicitada.', () => {
      expect(searchEmployee('0000-0', 'firstName')).toBe('Teste');
      expect(searchEmployee('0000-0', 'lastName')).toBe('Etset');
      expect(searchEmployee('0000-0', 'specialities')).toEqual(['Todas']);
    });
  });
