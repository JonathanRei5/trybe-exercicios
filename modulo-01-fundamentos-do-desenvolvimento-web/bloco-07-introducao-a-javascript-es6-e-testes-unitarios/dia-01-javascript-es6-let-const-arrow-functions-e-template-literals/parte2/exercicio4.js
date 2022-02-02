const LINHA = '-----------------------------------------------------------------------------'

// Exercício 4 Função 1-------------------------------------------------------------------------
console.log(`\n${LINHA}\nExercício 4 Função 1\n`);

const trocarLetra = (a, b) => a.replace(/x/g, b);
const letraTrocada = trocarLetra('Tryber x aqui!', 'Jonathan');
console.log(letraTrocada);

// skills
let skills = ['Bash', 'Git', 'HTML', 'JavaScript', 'CSS'];

// Exercício 4 Função 2-------------------------------------------------------------------------
console.log(`\n${LINHA}\nExercício 4 Função 2\n`);

const formatarHabilidades = (habilidades) => {
  if (habilidades.length === 0) return habilidades;
  let ret = habilidades.sort();
  ret[ret.length - 1] = `${ret[ret.length - 1]}; ... #goTrybe`;
  ret = ret.join(';\n');
  return ret;
}

const habilidades = (pessoa) => {
  const habilidades = formatarHabilidades(skills);
  return `${pessoa} Minhas cinco principais habilidades são:

${habilidades}`;
};

console.log(habilidades(letraTrocada, skills));
