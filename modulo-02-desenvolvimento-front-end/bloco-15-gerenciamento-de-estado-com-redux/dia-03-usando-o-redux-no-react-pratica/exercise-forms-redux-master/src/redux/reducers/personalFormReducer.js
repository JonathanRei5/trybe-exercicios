import { REGISTER_FORM } from '../actions/personalFormAction';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

const personalFormReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case REGISTER_FORM: {
    return ({
      ...action.value,
    });
  }
  default:
    return state;
  }
};

export default personalFormReducer;
