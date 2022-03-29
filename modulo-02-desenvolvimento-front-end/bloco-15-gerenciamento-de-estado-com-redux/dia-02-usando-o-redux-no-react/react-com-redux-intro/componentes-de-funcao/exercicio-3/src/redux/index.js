import { combineReducers, createStore } from 'redux';
import { CHANGE_SIGNAL } from './actionCreators';
import { MOVE_CAR } from './actionCreators';

const initialStateTrafficSignal = {
  signal: {
    color: 'red',
  },
};

const initialStateCars = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

function reducerTrafficSignal(state = initialStateTrafficSignal, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}

function reducerCars(state = initialStateCars, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({ reducerTrafficSignal, reducerCars }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
