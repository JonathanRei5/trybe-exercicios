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

// Exercício 2 ----------------------------------------------------------------
console.log('\nExercício 2 -------------------------------------------------\n');

const listarChaves = (objeto) => {
  const chaves = Object.keys(objeto);
  chaves.forEach((chave) => { console.log(chave); });
};
listarChaves(lesson1);

// Exercício 3 ----------------------------------------------------------------
console.log('\nExercício 3 -------------------------------------------------\n');

const tamanhoObjeto = (objeto) => Object.keys(lesson1).length;

console.log(`O tamanho do objeto lesson1 é ${tamanhoObjeto(lesson1)}`);
console.log(`O tamanho do objeto lesson2 é ${tamanhoObjeto(lesson2)}`);
console.log(`O tamanho do objeto lesson3 é ${tamanhoObjeto(lesson3)}`);

// Exercício 4 ----------------------------------------------------------------
console.log('\nExercício 4 -------------------------------------------------\n');

const listarValores = (objeto) => {
  const valores = Object.values(objeto);
  valores.forEach((valor) => { console.log(valor); });
};
listarValores(lesson1);

// Exercício 5 ----------------------------------------------------------------
console.log('\nExercício 5 -------------------------------------------------\n');

const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });

console.log(allLessons);

// Exercício 6 ----------------------------------------------------------------
console.log('\nExercício 6 -------------------------------------------------\n');

const totalEstudante = (lessons) => {
  let total = 0;
  Object.keys(lessons).forEach(chave => { total += lessons[chave].numeroEstudantes });
  return total;
};

console.log(`O total de estudantes é ${totalEstudante(allLessons)}`);

// Exercício 7 ----------------------------------------------------------------
console.log('\nExercício 7 -------------------------------------------------\n');

const obterValorPeloNumero = (objeto, numero) => Object.values(objeto)[numero];
console.log(obterValorPeloNumero(lesson1, 0));

// Exercício 8 ----------------------------------------------------------------
console.log('\nExercício 8 -------------------------------------------------\n');

const verificarPar = (objeto, chave, valor) => {
  if (Object.keys(objeto).includes(chave) && objeto[chave] === valor) {
    return true;
  }
  return false;
};

console.log(verificarPar(lesson3, 'turno', 'noite'));
console.log(verificarPar(lesson3, 'materia', 'Maria Clara'));

// Exercício Bônus 1  ----------------------------------------------------------------
console.log('\nExercício Bônus 1 -------------------------------------------------\n');

const totalEstudantePorAula = (licoes, materia) => {
  let total = 0;
  Object.keys(licoes).forEach(chave => {
    if (licoes[chave].materia === materia) {
      total += licoes[chave].numeroEstudantes
    }
  });
  return total;
};

const aula = 'Matemática';
const estudantesPorAula = totalEstudantePorAula(allLessons, aula);
console.log(`${estudantesPorAula} estudantes assistiram às aulas de ${aula}`);

// Exercício Bônus 2  ----------------------------------------------------------------
console.log('\nExercício Bônus 2 -------------------------------------------------\n');

const criarRelatorio = (licoes, professor) => {
  const relatorio = {
    professor: professor,
    aulas: [],
    estudantes: 0
  };

  Object.keys(licoes).forEach(chave => {
    if (licoes[chave].professor === professor) {
      relatorio.aulas.push(licoes[chave].materia);
      relatorio.estudantes += licoes[chave].numeroEstudantes
    }
  });

  return relatorio;
};
console.log(criarRelatorio(allLessons, 'Maria Clara'));
