window.onload = function () {
  // Obtendo os elementos
  const btn_hamburguer = document.getElementById('btn_hamburguer');
  const menu = document.querySelector('.menu');
  const menu_opcao = document.getElementsByClassName('menu_opcao');
  const input_conteiner = document.getElementById('input_conteiner');
  const input_fechar = document.getElementById('input_fechar');

  // Adiciona opção de abrir e fechar o menu
  btn_hamburguer.addEventListener('click', function () {
    if (menu.classList.contains('menu_abrir')) {
      menu.classList.remove('menu_abrir');
    } else {
      menu.classList.add('menu_abrir');
    }
  });

  // Adiciona opção de selecionar botão no menu e abrir o input
  function selecionarMenuOpcao(event) {
    for (let i = 0; i < menu_opcao.length; i += 1) {
      menu_opcao[i].classList.remove('menu_opcao_selecionada');
    }
    event.target.classList.add('menu_opcao_selecionada');
    input_conteiner.style.display = 'block';
  }
  for (let i = 0; i < menu_opcao.length; i += 1) {
    menu_opcao[i].addEventListener('click', selecionarMenuOpcao);
  }

  // Adiciona opção de fechar o input
  input_fechar.addEventListener('click', function () {
    const botaoSelecionado = document.querySelector('.menu_opcao.menu_opcao_selecionada');
    botaoSelecionado.classList.remove('menu_opcao_selecionada');
    input_conteiner.style.display = 'none';
  });
}
