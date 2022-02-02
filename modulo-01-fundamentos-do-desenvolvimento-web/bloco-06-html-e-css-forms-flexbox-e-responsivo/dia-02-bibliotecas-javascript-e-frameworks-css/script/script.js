// Elementos HTML
const DADOS_CONSOLIDADOS = document.querySelector('#dados-consolidados');
const FORMULARIO = document.getElementById('formulario');
const BTN_SUBMIT = document.getElementById('btnSubmit');
const BTN_LIMPAR = document.getElementById('btnLimpar');
const MENSAGEM_ERRO = document.getElementById('mensagem-erro');
const MENSAGEM_ERRO_TEXTO = document.getElementById('mensagem');

const CAMPOS_FORMULARIO = {
  IMPUT_NOME: document.getElementById('nome'),
  IMPUT_EMAIL: document.getElementById('email'),
  IMPUT_CPF: document.getElementById('cpf'),
  IMPUT_ENDERECO: document.getElementById('endereco'),
  IMPUT_CIDADE: document.getElementById('cidade'),
  SELECT_ESTADO: document.getElementById('estado'),
  IMPUT_RESIDENCIA: document.getElementsByName('tipo-residencia'),
  TEXTAREA_RESUMO: document.getElementById('resumo-curriculo'),
  IMPUT_CARGO: document.getElementById('cargo'),
  IMPUT_DESCRICAO: document.getElementById('descricao-cargo'),
  IMPUT_INICIO: document.getElementById('data-inicio')
}
CAMPOS_FORMULARIO.IMPUT_INICIO.DatePickerX.init({
  format: 'dd/mm/yyyy',
  weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  mondayFirst: false,
  shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  todayButtonLabel: 'Hoje',
  clearButtonLabel: 'Limpar',
});

// Adiciona os estados no elemento select
function adicionarEstados() {
  const estados = [
    ['', ''],
    ['AC', 'Acre'],
    ['AL', 'Alagoas'],
    ['AP', 'Amapá'],
    ['AM', 'Amazonas'],
    ['BA', 'Bahia'],
    ['CE', 'Ceará'],
    ['ES', 'Espírito Santo'],
    ['GO', 'Goiás'],
    ['MA', 'Maranhão'],
    ['MT', 'Mato Grosso'],
    ['MS', 'Mato Grosso do Sul'],
    ['MG', 'Minas Gerais'],
    ['PA', 'Pará'],
    ['PB', 'Paraíba'],
    ['PR', 'Paraná'],
    ['PE', 'Pernambuco'],
    ['PI', 'Piauí'],
    ['RJ', 'Rio de Janeiro'],
    ['RN', 'Rio Grande do Norte'],
    ['RS', 'Rio Grande do Sul'],
    ['RO', 'Rondônia'],
    ['RR', 'Roraima'],
    ['SC', 'Santa Catarina'],
    ['SP', 'São Paulo'],
    ['SE', 'Sergipe'],
    ['TO', 'Tocantins'],
    ['DF', 'Distrito Federal']
  ];

  const selectEstado = document.getElementById('estado');
  for (const estado of estados) {
    const option = document.createElement('option');
    option.value = estado[0];
    option.textContent = estado[1];
    selectEstado.append(option);
  }
}

// Retorna o valor do radio selecionado ou null se nenhum foi selecionado
function pegarValorRadio() {
  for (const radio of CAMPOS_FORMULARIO.IMPUT_RESIDENCIA) {
    if (radio.checked) return radio.value;
  }
  return null;
}

let idTimeoutCampoInvalido;
// Remove destaque de um campo
function removeDestaqueCampo(event) {
  if (event === undefined || event.target !== BTN_SUBMIT) {
    const campo = document.querySelector('.destacarCampo');
    campo.classList.remove('destacarCampo');
    document.removeEventListener('click', removeDestaqueCampo);
    document.removeEventListener('input', removeDestaqueCampo);
    window.clearTimeout(idTimeoutCampoInvalido);
  }
}

// Destaca um campo inválido
function destacarCampoInvalido(campo) {
  campo.focus();
  campo.scrollIntoView();
  campo.classList.add('destacarCampo');

  document.addEventListener('click', removeDestaqueCampo);
  document.addEventListener('input', removeDestaqueCampo);

  window.clearTimeout(idTimeoutCampoInvalido);
  idTimeoutCampoInvalido = window.setTimeout(() => {
    removeDestaqueCampo();
  }, 5000);
}

let idTimeout;
// Remove a mensagem de erro
function removerMensagemDeErro(event) {
  if (event === undefined || event.target !== BTN_SUBMIT) {
    MENSAGEM_ERRO.style.display = 'none';
    window.clearTimeout(idTimeout);
    document.removeEventListener('click', removerMensagemDeErro);
    document.removeEventListener('input', removerMensagemDeErro);
  }
}

// Insere uma mensagem de erro abaixo do elemento
function inserirMensagemDeErro(elemento, mensagem, tempo, distancia) {
  const bottom = elemento.offsetTop + elemento.offsetHeight + distancia;

  MENSAGEM_ERRO.style.display = 'block';
  MENSAGEM_ERRO.style.top = String(bottom).concat('px');
  MENSAGEM_ERRO_TEXTO.textContent = mensagem;

  destacarCampoInvalido(elemento);

  window.clearTimeout(idTimeout);
  idTimeout = window.setTimeout(() => {
    removerMensagemDeErro();
  }, tempo);

  document.addEventListener('click', removerMensagemDeErro);
  document.addEventListener('input', removerMensagemDeErro);
}

// Formata o CPF
function formatarCPF(cpf) {
  let ret = cpf.substring(0, 3).concat('.');
  ret = ret.concat(cpf.substring(3, 6).concat('.'));
  ret = ret.concat(cpf.substring(6, 9).concat('-'));
  ret = ret.concat(cpf.substring(9, 11));
  return ret;
}

// Insere os dados consolidados
function inserirDados(elementoPai, descricao, dado) {
  const span = document.createElement('span');
  span.className = 'fw-bolder mx-2 text-nowrap';
  span.textContent = descricao;
  const div = document.createElement('div');
  div.className = 'border border-top-0 border-start-0 border-end-0 border-bottom-1 border-dark px-1 mb-2';
  div.appendChild(span);
  let texto = document.createTextNode(dado);
  div.appendChild(texto);
  elementoPai.appendChild(div);
}

//Mostra os dados consolidados
function mostrarDados() {
  const dados = document.querySelector('#dados-consolidados #dados');
  dados.innerHTML = '';
  // Nome
  inserirDados(dados, 'Nome:', CAMPOS_FORMULARIO.IMPUT_NOME.value);
  // E-mail
  inserirDados(dados, 'E-mail:', CAMPOS_FORMULARIO.IMPUT_EMAIL.value);
  // CPF
  inserirDados(dados, 'CPF:', formatarCPF(CAMPOS_FORMULARIO.IMPUT_CPF.value));
  // Endereço
  inserirDados(dados, 'Endereço:', CAMPOS_FORMULARIO.IMPUT_ENDERECO.value);
  // Cidade
  inserirDados(dados, 'Cidade:', CAMPOS_FORMULARIO.IMPUT_CIDADE.value);
  // Estado
  inserirDados(dados, 'Estado:', CAMPOS_FORMULARIO.SELECT_ESTADO.value);
  // Tipo de residência
  inserirDados(dados, 'Tipo de residência:', pegarValorRadio());
  // Resumo do currículo
  inserirDados(dados, 'Resumo do currículo:', CAMPOS_FORMULARIO.TEXTAREA_RESUMO.value);
  // Cargo
  inserirDados(dados, 'Cargo:', CAMPOS_FORMULARIO.IMPUT_CARGO.value);
  // Descrição do cargo
  inserirDados(dados, 'Descrição do cargo:', CAMPOS_FORMULARIO.IMPUT_DESCRICAO.value);
  // Início do cargo
  inserirDados(dados, 'Início do cargo:', CAMPOS_FORMULARIO.IMPUT_INICIO.DatePickerX.getValue());
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

// Retorna o primeiro campo inválido do formulário
function obterCampoInvalido(fields, groupFields) {
  let campoInvalido = Object.keys(fields).find((campo) => {
    if (!fields[campo].isValid) {
      return true;
    }
    return false;
  });

  if (campoInvalido) {
    return {
      campo: fields[campoInvalido].elem.parentElement,
      mensagemErro: fields[campoInvalido].errorMessage,
    }
  }

  campoInvalido = Object.keys(groupFields).find((campos) => {
    if (!groupFields[campos].isValid) {
      return true;
    }
    return false;
  });

  if (campoInvalido) {
    return {
      campo: groupFields[campoInvalido].groupElem,
      mensagemErro: groupFields[campoInvalido].errorMessage,
    }
  }

  return undefined;
}

// Faz as verificações dos campos do formulário
const validate = new window
  .JustValidate('#form', {
    errorLabelStyle: {
      display: 'none',
    },
  })
  // Verificação do Nome
  .addField('#nome', [
    {
      rule: 'required',
      errorMessage: 'Preencha este campo.',
    }
  ])
  // Verificação do E-mail
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Preencha este campo.',
    },
    {
      rule: 'email',
      errorMessage: 'Preencha corretamente o E-mail.',
    }
  ])
  // Verificação do CPF
  .addField('#cpf', [
    {
      rule: 'required',
      errorMessage: 'Preencha este campo.',
    },
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'O CPF deve conter 11 dígitos.',
    },
    {
      rule: 'number',
      errorMessage: 'Insira apenas números no CPF.',
    },
    {
      validator: cpfValido,
      errorMessage: 'CPF inválido.',
    }
  ])
  // Verificação do Endereço
  .addField('#endereco', [
    {
      rule: 'required',
      errorMessage: 'Preencha este campo.',
    }
  ])
  // Verificação da Cidade
  .addField('#cidade', [
    {
      rule: 'required',
      errorMessage: 'Preencha este campo.',
    }
  ])
  // Verificação do Estado
  .addField('#estado', [
    {
      rule: 'required',
      errorMessage: 'Selecione um item da lista.',
    }
  ])
  // Verificação do Tipo de residencia
  .addRequiredGroup('#tipo-residencia', 'Selecione uma das opções.')
  // Verificação do Resumo do currículo
  .addField('#resumo-curriculo', [
    {
      rule: 'required',
      errorMessage: 'Preencha este campo.',
    }
  ])
  // Verificação do Cargo
  .addField('#cargo', [
    {
      rule: 'required',
      errorMessage: 'Preencha este campo.',
    }
  ])
  // Verificação da Descrição do cargo
  .addField('#descricao-cargo', [
    {
      rule: 'required',
      errorMessage: 'Preencha este campo.',
    }
  ])
  // Verificação da Data de início
  .addField('#data-inicio', [
    {
      rule: 'required',
      errorMessage: 'Preencha este campo.',
    }
  ])
  .onFail(function () {
    const campoInvalido = obterCampoInvalido(this.fields, this.groupFields);
    inserirMensagemDeErro(
      campoInvalido.campo,
      campoInvalido.mensagemErro,
      5000,
      4
    );
  })
  .onSuccess(() => {
    mostrarDados();
  });

// Limpa os dados mostrados
function limparDados() {
  const dados = document.querySelector('#dados-consolidados #dados');
  dados.innerHTML = '';
}

// Adiciona ouvinte no elemento
BTN_LIMPAR.addEventListener('click', limparDados);

adicionarEstados();
