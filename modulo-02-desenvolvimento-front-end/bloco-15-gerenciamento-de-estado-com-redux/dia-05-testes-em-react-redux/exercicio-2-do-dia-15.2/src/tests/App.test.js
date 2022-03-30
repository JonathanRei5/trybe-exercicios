import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from './helpers/renderWithRedux';
import App from '../App';

describe('Testando o App', () => {
  test('Verifica se existe três botões para mover o carro', () => {
    renderWithRedux(<App />);
    expect(screen.getAllByRole('button', { name: /Move/i }))
      .toHaveLength(3);
  });

  test('Verifica se existe três carros na tela', () => {
    renderWithRedux(<App />);
    expect(screen.getAllByRole('img', { name: /car/i }))
      .toHaveLength(3);
  });

  test(`Verifica se ao clicar no botão do carro vermelho
        o state do mesmo muda para true`, async () => {
    const { store } = renderWithRedux(<App />);
    const carRedButton = screen.getByTestId('carRed');
    userEvent.click(carRedButton);
    const state = store.getState();
    expect(state.cars.red).toBeTruthy();
  });

  test(`Verifica se ao clicar no botão do carro azul
        o state do mesmo muda para true`, async () => {
    const { store } = renderWithRedux(<App />);
    const carBlueButton = screen.getByTestId('carBlue');
    userEvent.click(carBlueButton);
    const state = store.getState();
    expect(state.cars.blue).toBeTruthy();
  });

  test(`Verifica se ao clicar no botão do carro amarelo
        o state do mesmo muda para true`, async () => {
    const { store } = renderWithRedux(<App />);
    const carYellowButton = screen.getByTestId('carYellow');
    userEvent.click(carYellowButton);
    const state = store.getState();
    expect(state.cars.yellow).toBeTruthy();
  });
});
