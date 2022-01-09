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

// Verifica se algum radio foi selecionado
function verificarRadios() {
  for (const radio of CAMPOS_FORMULARIO.IMPUT_RESIDENCIA) {
    if (radio.checked) return true;
  }
  return false;
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

// Verifica se os campos do formulário estão vazios
function verificarCamposVazios() {
  for (const campo in CAMPOS_FORMULARIO) {
    if (CAMPOS_FORMULARIO[campo].id === undefined) {
      if (!verificarRadios()) {
        inserirMensagemDeErro(CAMPOS_FORMULARIO[campo][0].parentElement.parentElement, 'Selecione uma das opções', 5000, 4);
        return false;
      }
      continue;
    }

    if (stringVazia(CAMPOS_FORMULARIO[campo].value)) {
      let mensagem = 'Preencha este campo';
      if (CAMPOS_FORMULARIO[campo].id === 'estado') {
        mensagem = 'Selecione um item da lista';
      }
      inserirMensagemDeErro(CAMPOS_FORMULARIO[campo].parentElement, mensagem, 5000, 4);
      return false;
    }
  }

  return true;
}

// Faz as verificações dos campos do formulário
function verificarInputs(event) {
  event.preventDefault();
  if (!verificarCamposVazios()) {
    return;
  }
  if (!verificarEmail(CAMPOS_FORMULARIO.IMPUT_EMAIL.value)) {
    destacarCampoInvalido(CAMPOS_FORMULARIO.IMPUT_EMAIL.parentElement);
    return;
  }
  if (!verificarCPF(CAMPOS_FORMULARIO.IMPUT_CPF.value)) {
    destacarCampoInvalido(CAMPOS_FORMULARIO.IMPUT_CPF.parentElement);
    return;
  }
  if (!verificarData(CAMPOS_FORMULARIO.IMPUT_INICIO.value)) {
    destacarCampoInvalido(CAMPOS_FORMULARIO.IMPUT_INICIO.parentElement);
    return;
  }
}

// Adiciona ouvintes nos elementos
function adicionarOuvintes() {
  BTN_SUBMIT.addEventListener('click', verificarInputs);
}

adicionarOuvintes();
adicionarEstados();
