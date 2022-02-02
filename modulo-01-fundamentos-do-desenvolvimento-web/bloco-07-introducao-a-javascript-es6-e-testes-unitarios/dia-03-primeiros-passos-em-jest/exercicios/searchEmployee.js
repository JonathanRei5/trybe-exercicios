// Dados
const professionalBoard = [
  {
    id: '0000-0',
    firstName: 'Teste',
    lastName: 'Etset',
    specialities: ['Todas'],
  },
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  const ids = professionalBoard.map(funcionario => funcionario.id);
  const indexID = ids.indexOf(id);
  if (indexID === -1) throw new Error('ID não identificada');
  const funcionario = professionalBoard[indexID];
  if (funcionario[detail] === undefined) throw new Error('Informação indisponível');
  return funcionario[detail];
};

module.exports = searchEmployee;
