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

// Verifica se o CPF é válido
function cpfValido(cpf) {
  let numerosCpf = cpf.replace(/\D+/g, '');
  numerosCpf = Array.from(numerosCpf).map((numero) => Number(numero));

  if (numerosCpf.length !== 11) {
    return false;
  }
  const numerosIguais = numerosCpf.every((numero) => numero === numerosCpf[0]);
  if (numerosIguais) {
    return false;
  }

  const digitosIniciais = numerosCpf.slice(0, numerosCpf.length - 2);
  const digitosVerificadores = numerosCpf.slice(-2);

  let calculo1 = digitosIniciais.reduce(
    (acc, numero, index) => acc + (numero * (10 - index)), 0
  );
  calculo1 = (calculo1 * 10) % 11;
  calculo1 = (calculo1 === 10) ? 0 : calculo1;
  if (calculo1 !== digitosVerificadores[0]) {
    return false;
  }

  let calculo2 = digitosIniciais.reduce(
    (acc, numero, index) => acc + (numero * (11 - index)), 0
  ) + (digitosVerificadores[0] * 2);
  calculo2 = (calculo2 * 10) % 11;
  calculo2 = (calculo2 === 10) ? 0 : calculo2;
  if (calculo2 !== digitosVerificadores[1]) {
    return false;
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
  if (!cpfValido(cpf)) {
    window.alert('CPF inválido.');
    return false;
  }
  return true;
}

// Retonar o máximo de dias no mês de acordo com o mês e ano
function verificarDiaMaximoData(mes, ano) {
  const numberAno = Number(ano);
  const numberMes = Number(mes);
  if (numberMes === 2) {
    if (numberAno % 400 === 0 || (numberAno % 4 === 0 && numberAno % 100 !== 0)) {
      return 29;
    }
    return 28;
  }
  if (numberMes <= 7) {
    return 30 + (numberMes % 2);
  }
  return 30 + ((numberMes % 2 === 0) ? 1 : 0);
}

// Verifica o dia da data
function verificarDiaData(dia, mes, ano) {
  if (stringVazia(dia)) {
    window.alert('Insira um dia.');
    return false;
  }
  if (/[^0-9]/g.test(dia)) {
    window.alert('Insira apenas números no dia.');
    return false;
  }
  if (Number(dia) < 1 || Number(dia) > verificarDiaMaximoData(mes, ano)) {
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
  if (Number(ano) < 1900) {
    window.alert('Insira um ano apartir de 1900.');
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

  if (!verificarAnoData(subData[2])) {
    return false;
  }
  if (!verificarMesData(subData[1])) {
    return false;
  }
  if (!verificarDiaData(subData[0], subData[1], subData[2])) {
    return false;
  }

  return true;
}
