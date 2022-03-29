import { REGISTER_PROFESSIONAL_FORM } from '../actions/professionalFormAction';

const INITIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

const professionalFormReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case REGISTER_PROFESSIONAL_FORM: {
    return ({
      ...action.value,
    });
  }
  default:
    return state;
  }
};

export default professionalFormReducer;
