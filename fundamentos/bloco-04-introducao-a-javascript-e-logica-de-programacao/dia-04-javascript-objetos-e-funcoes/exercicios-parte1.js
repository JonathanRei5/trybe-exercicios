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

// Exercício 4
console.log("Exercício 4:\n");
for (let key in info)
  console.log(info[key]);
console.log(linha);

// Exercício 5
console.log("Exercício 5:\n");
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};
for (let key in info) {
  if (key === 'recorrente') {
    if (info[key] === info2[key]) {
      if (info['recorrente'] === 'Sim')
        console.log("Ambos recorrentes");
      else
        console.log("Ambos não recorrentes");
    }
    else
      console.log(info[key] + " e " + info2[key]);
  }
  else
    console.log(info[key] + " e " + info2[key]);
}
console.log(linha);

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// Exercício 6
console.log("Exercício 6:\n");
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama \'" + leitor.livrosFavoritos[0].titulo + "\'");
console.log(linha);

// Exercício 7
console.log("Exercício 7:\n");
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
});
console.log("Novo livro adicionado.");
console.log(linha);

// Exercício 8
console.log("Exercício 8:\n");
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livro(s) favorito(s).");
console.log(linha);
