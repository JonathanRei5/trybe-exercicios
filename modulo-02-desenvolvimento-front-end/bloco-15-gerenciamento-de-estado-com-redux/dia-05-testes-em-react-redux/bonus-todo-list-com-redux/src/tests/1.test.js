import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRedux from './helpers/renderWithRedux'
import App from '../App';

describe('Testando a aplicação, testando input', () => {
  renderWithRedux(<App />);
  const inputTask = screen.getByLabelText('Tarefa:');
  const labelTask = screen.getByText('Tarefa:');

  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});
