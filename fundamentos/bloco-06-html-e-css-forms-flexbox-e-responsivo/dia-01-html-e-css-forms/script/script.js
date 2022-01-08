// Elementos HTML
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

const BTN_SUBMIT = document.getElementById('btnSubmit');
const MENSAGEM_ERRO = document.getElementById('mensagem-erro');
const MENSAGEM_ERRO_TEXTO = document.getElementById('mensagem');

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

// Verifica se uma string está vazia ou com apenas espaços
function stringVazia(string) {
  const temp = string.replace(/ /g, '');
  if (temp.length === 0) {
    return true;
  }
  return false;
}

// Verifica se algum radio foi selecionado
function verificarRadios() {
  for (const radio of CAMPOS_FORMULARIO.IMPUT_RESIDENCIA) {
    if (radio.checked) return true;
  }
  return false;
}

// Remove a mensagem de erro
function removerMensagemDeErro(event) {
  if (event.target !== BTN_SUBMIT) {
    MENSAGEM_ERRO.style.display = 'none';
    window.clearTimeout(idTimeout);
    document.removeEventListener('click', removerMensagemDeErro);
  }
}

// Destaca um campo inválido
function destacarCampoInvalido(campo) {
  campo.focus();
  campo.scrollIntoView();
}

// Insere uma mensagem de erro abaixo do elemento
let idTimeout;
function inserirMensagemDeErro(elemento, mensagem, tempo) {
  const bottom = elemento.offsetTop + elemento.offsetHeight;

  MENSAGEM_ERRO.style.display = 'block';
  MENSAGEM_ERRO.style.top = String(bottom).concat('px');
  MENSAGEM_ERRO_TEXTO.textContent = mensagem;

  destacarCampoInvalido(elemento);

  window.clearTimeout(idTimeout);
  idTimeout = window.setTimeout(() => {
    MENSAGEM_ERRO.style.display = 'none';
  }, tempo);

  document.addEventListener('click', removerMensagemDeErro);
}

// Verifica se os campos do formulário estão vazios
function verificarCamposVazios() {
  for (const campo in CAMPOS_FORMULARIO) {
    if (CAMPOS_FORMULARIO[campo].id === undefined) {
      if (!verificarRadios()) {
        inserirMensagemDeErro(CAMPOS_FORMULARIO[campo][0].parentElement.parentElement, 'Selecione uma das opções', 5000);
        return false;
      }
      continue;
    }

    if (stringVazia(CAMPOS_FORMULARIO[campo].value)) {
      let mensagem = 'Preencha este campo';
      if (CAMPOS_FORMULARIO[campo].id === 'estado') {
        mensagem = 'Selecione um item da lista';
      }
      inserirMensagemDeErro(CAMPOS_FORMULARIO[campo].parentElement, mensagem, 5000);
      return false;
    }
  }

  return true;
}

// Verifica se o e-mail está correto
function verificarEmail() {
  const subEmail = CAMPOS_FORMULARIO.IMPUT_EMAIL.value.split('@');

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
function verificarCPF() {
  const cpf = CAMPOS_FORMULARIO.IMPUT_CPF.value;
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
function verificarData() {
  const subData = CAMPOS_FORMULARIO.IMPUT_INICIO.value.split('/');

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

// Faz as verificações dos campos do formulário
function verificarInputs(event) {
  event.preventDefault();
  if (!verificarCamposVazios()) {
    return;
  }
  if (!verificarEmail()) {
    destacarCampoInvalido(CAMPOS_FORMULARIO.IMPUT_EMAIL);
    return;
  }
  if (!verificarCPF()) {
    destacarCampoInvalido(CAMPOS_FORMULARIO.IMPUT_CPF);
    return;
  }
  if (!verificarData()) {
    destacarCampoInvalido(CAMPOS_FORMULARIO.IMPUT_INICIO);
    return;
  }
}

// Adiciona ouvintes nos elementos
function adicionarOuvintes() {
  BTN_SUBMIT.addEventListener('click', verificarInputs);
}

adicionarOuvintes();
adicionarEstados();
