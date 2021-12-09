window.onload = function () {
  // Obtendo os elementos
  const btn_hamburguer = document.getElementById('btn_hamburguer');
  const menu = document.querySelector('.menu');

  // Adiciona opção de abrir e fechar o menu
  btn_hamburguer.addEventListener('click', function () {
    if (menu.classList.contains('menu_abrir')) {
      menu.classList.remove('menu_abrir');
    } else {
      menu.classList.add('menu_abrir');
    }
  });
}
