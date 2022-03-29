function emptyField(value) {
  const temp = value.replace(/ /g, '');
  if (temp.length === 0) return true;
  return false;
}

const fieldsValidations = {
  nome: (value) => {
    if (emptyField(value)) return 'Preencha este campo.'
    if (value.length > 40) return 'Limite máximo de 40 caracteres.'
    return '';
  },

  email: (value) => {
    if (emptyField(value)) return 'Preencha este campo.'
    if (value.length > 50) return 'Limite máximo de 50 caracteres.'
    return '';
  },

  cpf: (value) => {
    if (emptyField(value)) return 'Preencha este campo.'
    if (value.length > 11) return 'Limite máximo de 11 caracteres.'
    return '';
  },

  endereco: (value) => {
    if (emptyField(value)) return 'Preencha este campo.'
    if (value.length > 200) return 'Limite máximo de 200 caracteres.'
    return '';
  },

  cidade: (value) => {
    if (emptyField(value)) return 'Preencha este campo.'
    if (value.length > 28) return 'Limite máximo de 28 caracteres.'
    return '';
  },

  estado: (value) => {
    if (emptyField(value)) return 'Selecione um estado da lista.'
    return '';
  },

  tipoResidencia: (value) => {
    if (emptyField(value)) return 'Selecione o tipo de residência.'
    return '';
  },

  resumoCurriculo: (value) => {
    if (emptyField(value)) return 'Preencha este campo.'
    if (value.length > 1000) return 'Limite máximo de 1000 caracteres.'
    return '';
  },

  cargo: (value) => {
    if (emptyField(value)) return 'Preencha este campo.'
    if (value.length > 40) return 'Limite máximo de 40 caracteres.'
    return '';
  },

  descricaoCargo: (value) => {
    if (emptyField(value)) return 'Preencha este campo.'
    if (value.length > 500) return 'Limite máximo de 500 caracteres.'
    return '';
  },
};

export default fieldsValidations;
