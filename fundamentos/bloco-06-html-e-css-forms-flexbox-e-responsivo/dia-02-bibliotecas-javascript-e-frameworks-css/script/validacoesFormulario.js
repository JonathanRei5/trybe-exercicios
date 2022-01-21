// Verifica se uma string está vazia ou com apenas espaços
function stringVazia(string) {
  const temp = string.replace(/ /g, '');
  if (temp.length === 0) {
    return true;
  }
  return false;
}

// Verifica se o e-mail está correto
function verificarEmail(email) {
  const subEmail = email.split('@');

  if (subEmail.length < 2) {
    window.alert('Insira um "@" no e-mail.');
    return false;
  } else if (subEmail.length > 2) {
    window.alert('Apenas um "@" é permitido no e-mail.');
    return false;
  } else {
    if (stringVazia(subEmail[0])) {
      window.alert('Insira uma parte antes do "@" no e-mail.');
      return false;
    } else if (stringVazia(subEmail[1])) {
      window.alert('Insira uma parte depois do "@" no e-mail.');
      return false;
    }
  }

  return true;
}

// Verifica se o CPF está correto
function verificarCPF(cpf) {
  if (/[^0-9]/g.test(cpf)) {
    window.alert('Insira apenas números no CPF.');
    return false;
  }
  if (cpf.length !== 11) {
    window.alert('O CPF deve conter 11 dígitos.');
    return false;
  }
  return true;
}
