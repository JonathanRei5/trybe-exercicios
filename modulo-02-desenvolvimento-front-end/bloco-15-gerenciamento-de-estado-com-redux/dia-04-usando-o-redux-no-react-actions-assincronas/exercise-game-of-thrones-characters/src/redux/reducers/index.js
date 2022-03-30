import { combineReducers } from "redux";
import REQUEST_CHARACTER from '../actions';
import GET_CHARACTER from '../actions';
import FAILED_REQUEST from '../actions';

const INITIAL_STATE = {
  loading: false,
  character: undefined,
  error: undefined,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER:
      return { ...state, loading: true };
    case GET_CHARACTER:
      return { ...state, loading: false, character: action.character };
    case FAILED_REQUEST:
      return { ...state, loading: false, error: action.error, character: undefined };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ reducer });

export default rootReducer;
