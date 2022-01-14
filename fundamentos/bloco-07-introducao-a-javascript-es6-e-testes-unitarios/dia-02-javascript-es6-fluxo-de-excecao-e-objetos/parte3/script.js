const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1 ----------------------------------------------------------------
console.log('\nExercício 1 -------------------------------------------------\n');

const adicionarPar = (objeto, chave, valor) => { objeto[chave] = valor; };
adicionarPar(lesson2, 'turno', 'noite');
console.log(lesson2);
