// Elementos da página
let btn_hamburguer;
let menu;
let menu_opcao;
let input_conteiner;
let input_botao;
let input_fechar;

// Opção de alteração selecionada
let alterar;

// Obtendo os elementos
function obterElementos() {
  btn_hamburguer = document.getElementById('btn_hamburguer');
  menu = document.querySelector('.menu');
  menu_opcao = document.getElementsByClassName('menu_opcao');
  input_conteiner = document.getElementById('input_conteiner');
  input_botao = document.getElementById('input_botao');
  input_fechar = document.getElementById('input_fechar');
}

// Objeto com as funções de alteração
const funcoesAlterar = {
  corFundo: function () {
    let input = input_conteiner.querySelector('#input input');
    document.body.style.backgroundColor = input.value;
  },
  corTexto: function () {
    let input = input_conteiner.querySelector('#input input');
    const article = document.getElementsByTagName('article')[0];
    article.style.color = input.value;
  },
  tamanhoFonte: function () {
    let input = input_conteiner.querySelector('#input input');
    const article = document.getElementsByTagName('article')[0];
    article.style.fontSize = String(input.value).concat('px');
  },
  espacoLinhas: function () {
    let input = input_conteiner.querySelector('#input input');
    const article = document.getElementsByTagName('article')[0];
    article.style.lineHeight = String(input.value).concat('px');
  },
  tipoFonte: function () {
    let input = input_conteiner.querySelector('#input input');
    const article = document.getElementsByTagName('article')[0];
    article.style.fontFamily = input.value;
  }
}

// Tipos de input para cada opcao de alteracao
const tiposInputs = {
  corFundo: { tipo: 'color', descricao: 'Cor de fundo' },
  corTexto: { tipo: 'color', descricao: 'Cor da fonte' },
  tamanhoFonte: { tipo: 'number', descricao: 'Tamanho da fonte (pixels)' },
  espacoLinhas: { tipo: 'number', descricao: 'Espaço entre linhas (pixels)' },
  tipoFonte: { tipo: 'text', descricao: 'Tipo da fonte' }
}

// Abri e fecha o menu
function abrirFecharMenu() {
  menu.classList.toggle('menu_abrir');
  btn_hamburguer.classList.toggle('btn_hamburguer_clicado');
  if (!menu.classList.contains('menu_abrir')) {
    fecharInput();
  }
}

// Altera o input de acordo com a opção selecionada
function alterarInput() {
  let input = input_conteiner.querySelector('#input');
  let input_descricao = input_conteiner.querySelector('#input_descricao');
  input_descricao.textContent = tiposInputs[alterar].descricao;
  input.innerHTML = '';
  let novoInput = document.createElement('input');
  novoInput.type = tiposInputs[alterar].tipo;
  input.appendChild(novoInput);
}

// Seleciona o botão no menu e abri o input
function selecionarMenuOpcao(event) {
  const target = event.target;
  if (target.classList.contains('menu_opcao')) {
    const btnSelecionado = document.querySelector('.menu_opcao_selecionada');
    if (btnSelecionado !== null) {
      btnSelecionado.classList.remove('menu_opcao_selecionada');
    }
    target.classList.add('menu_opcao_selecionada');
    input_conteiner.style.display = 'block';
    alterar = target.id;
    alterarInput();
  }
}

// Fecha o input
function fecharInput() {
  const botaoSelecionado = document.querySelector('.menu_opcao.menu_opcao_selecionada');
  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove('menu_opcao_selecionada');
  }
  input_conteiner.style.display = 'none';
}

// Faz a alteração selecionada
function fazerAlteracao() {
  funcoesAlterar[alterar]();
}

// Adiciona ouvintes nos elementos
function adicionarOuvintes() {
  btn_hamburguer.addEventListener('click', abrirFecharMenu);
  input_fechar.addEventListener('click', fecharInput);
  menu.addEventListener('click', selecionarMenuOpcao);
  input_botao.addEventListener('click', fazerAlteracao);
}

// Inicia a aplicação
obterElementos();
adicionarOuvintes();
