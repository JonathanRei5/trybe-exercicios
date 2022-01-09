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

// Verifica o dia da data
function verificarDiaData(dia) {
  if (stringVazia(dia)) {
    window.alert('Insira um dia.');
    return false;
  }
  if (/[^0-9]/g.test(dia)) {
    window.alert('Insira apenas números no dia.');
    return false;
  }
  if (Number(dia) < 1 || Number(dia) > 31) {
    window.alert('O dia está incorreto.');
    return false;
  }

  return true;
}

// Verifica o mes da data
function verificarMesData(mes) {
  if (stringVazia(mes)) {
    window.alert('Insira um mês.');
    return false;
  }
  if (/[^0-9]/g.test(mes)) {
    window.alert('Insira apenas números no mês.');
    return false;
  }
  if (Number(mes) < 1 || Number(mes) > 12) {
    window.alert('O mês está incorreto.');
    return false;
  }

  return true;
}

// Verifica o ano da data
function verificarAnoData(ano) {
  if (stringVazia(ano)) {
    window.alert('Insira um ano.');
    return false;
  }
  if (/[^0-9]/g.test(ano)) {
    window.alert('Insira apenas números no ano.');
    return false;
  }

  return true;
}

// Verifica se a data está correta
function verificarData(data) {
  const subData = data.split('/');

  if (subData.length !== 3) {
    window.alert('Insira uma data no formato DD/MM/AAAA.');
    return false;
  }

  if (!verificarDiaData(subData[0])) {
    return false;
  }
  if (!verificarMesData(subData[1])) {
    return false;
  }
  if (!verificarAnoData(subData[2])) {
    return false;
  }

  return true;
}
