import { createStore } from "redux";
import { reducer } from '../../redux';
import { Provider } from 'react-redux';
import { render } from "@testing-library/react";

export default function renderWithRedux(
  componet,
  {
    initialState = {},
    store = createStore(reducer)
  } = {}) {
  return {
    ...render(<Provider store={store}>{componet}</Provider>),
    store
  };
}
