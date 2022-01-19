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

// Obtem um objeto com as preferencias
function obterPreferencias() {
  const preferencias = window.localStorage.getItem('preferenciasDeEstilo');
  if (preferencias === null) {
    return null;
  }
  return JSON.parse(preferencias);
}

// Salva a preferência no armazenamento local
function salvarPreferencia(chave, valor) {
  let preferencias = obterPreferencias();
  if (preferencias === null) {
    preferencias = {};
  }
  preferencias[chave] = valor;
  window.localStorage.setItem('preferenciasDeEstilo', JSON.stringify(preferencias));
}

// Objeto com as funções de alteração
const funcoesAlterar = {
  corFundo: function (valor) {
    if (valor !== undefined) {
      document.body.style.backgroundColor = valor;
      return;
    }
    let input = input_conteiner.querySelector('#input input');
    document.body.style.backgroundColor = input.value;
    salvarPreferencia(alterar, input.value);
  },
  corTexto: function (valor) {
    const article = document.getElementsByTagName('article')[0];
    if (valor !== undefined) {
      article.style.color = valor;
      return;
    }
    let input = input_conteiner.querySelector('#input input');
    article.style.color = input.value;
    salvarPreferencia(alterar, input.value);
  },
  tamanhoFonte: function (valor) {
    const article = document.getElementsByTagName('article')[0];
    if (valor !== undefined) {
      article.style.fontSize = valor;
      return;
    }
    let input = input_conteiner.querySelector('#input input');
    article.style.fontSize = String(input.value).concat('px');
    salvarPreferencia(alterar, String(input.value).concat('px'));
    input.value = '';
  },
  espacoLinhas: function (valor) {
    const article = document.getElementsByTagName('article')[0];
    if (valor !== undefined) {
      article.style.lineHeight = valor;
      return;
    }
    let input = input_conteiner.querySelector('#input input');
    article.style.lineHeight = String(input.value).concat('px');
    salvarPreferencia(alterar, String(input.value).concat('px'));
    input.value = '';
  },
  tipoFonte: function (valor) {
    const article = document.getElementsByTagName('article')[0];
    if (valor !== undefined) {
      article.style.fontFamily = valor;
      return;
    }
    let input = input_conteiner.querySelector('#input input');
    article.style.fontFamily = input.value;
    salvarPreferencia(alterar, input.value);
    input.value = '';
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

// Remove o input do conteiner
function removerInput() {
  let input = input_conteiner.querySelector('#input input');
  if (input !== null) {
    input_conteiner.querySelector('#input input').remove();
  }
}

// Fecha o conteiner do input
function fecharInput() {
  const botaoSelecionado = document.querySelector('.menu_opcao.menu_opcao_selecionada');
  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove('menu_opcao_selecionada');
  }
  removerInput();
  input_conteiner.style.display = 'none';
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
  removerInput();
  const input = input_conteiner.querySelector('#input');
  const input_descricao = input_conteiner.querySelector('#input_descricao');
  input_descricao.textContent = tiposInputs[alterar].descricao;
  const novoInput = document.createElement('input');
  novoInput.type = tiposInputs[alterar].tipo;
  novoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      fazerAlteracao();
    }
  });
  novoInput.min = 1;
  input.appendChild(novoInput);
  novoInput.focus();
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

// Faz a alteração selecionada
function fazerAlteracao() {
  funcoesAlterar[alterar]();
}

// Carrega as preferências salvas
function carregarPreferencia() {
  let preferencias = obterPreferencias();
  if (preferencias === null) {
    return;
  }
  const chaveValor = Object.entries(preferencias);
  for (let i = 0; i < chaveValor.length; i += 1) {
    funcoesAlterar[chaveValor[i][0]](chaveValor[i][1]);
  }
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
carregarPreferencia();
