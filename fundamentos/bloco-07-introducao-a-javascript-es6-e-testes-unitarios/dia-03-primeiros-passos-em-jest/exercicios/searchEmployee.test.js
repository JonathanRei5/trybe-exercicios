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
      expect(searchEmployee('', 'firstName')).toBe('ID não identificada');
      expect(searchEmployee('aaaa-a', 'firstName')).toBe('ID não identificada');
      expect(searchEmployee('abcd-e', 'firstName')).toBe('ID não identificada');
      expect(searchEmployee('465434', 'firstName')).toBe('ID não identificada');
      expect(searchEmployee(null, 'firstName')).toBe('ID não identificada');
      expect(searchEmployee(undefined, 'firstName')).toBe('ID não identificada');
    });
    it('Ao receber uma informação inválida retorna "Informação indisponível".', () => {
      expect(searchEmployee('0000-0', '')).toBe('Informação indisponível');
      expect(searchEmployee('0000-0', 'jhsgdfhgsddfhj')).toBe('Informação indisponível');
      expect(searchEmployee('0000-0', null)).toBe('Informação indisponível');
      expect(searchEmployee('0000-0', undefined)).toBe('Informação indisponível');
    });
    it('Ao receber uma ID e informação válida retorna a informação solicitada.', () => {
      expect(searchEmployee('0000-0', 'firstName')).toBe('Teste');
      expect(searchEmployee('0000-0', 'lastName')).toBe('Etset');
      expect(searchEmployee('0000-0', 'specialities')).toEqual(['Todas']);
    });
  });
