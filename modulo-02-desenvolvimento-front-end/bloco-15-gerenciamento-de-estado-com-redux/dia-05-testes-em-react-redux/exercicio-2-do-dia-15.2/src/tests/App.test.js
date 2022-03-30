import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRedux from './helpers/renderWithRedux';
import App from '../App';

describe('Testando o App', () => {
  test('Verifica se existe três botões para mover o carro', () => {
    renderWithRedux(<App />);
    expect(screen.getAllByRole('button', { name: /Move/i }))
      .toHaveLength(3);
  });
});
