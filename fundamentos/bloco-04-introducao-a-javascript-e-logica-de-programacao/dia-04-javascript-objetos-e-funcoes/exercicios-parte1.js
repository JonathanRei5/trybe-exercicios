const linha = "---------------------------------------------------------------------------";

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercício 1
console.log(linha);
console.log("Exercício 1:\n");
console.log("Bem-vinda, " + info.personagem);
console.log(linha);

// Exercício 2
console.log("Exercício 2:\n");
info.recorrente = 'Sim';
console.log(info);
console.log(linha);

// Exercício 3
console.log("Exercício 3:\n");
for (let key in info)
  console.log(key);
console.log(linha);
