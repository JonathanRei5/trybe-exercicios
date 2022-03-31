import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from './helpers/renderWithRedux'
import App from '../App';

describe('Testando funcionalidade de apagar item selecionado', () => {
  test(`Não deve haver botões de remover
        após a primeira renderização da página`, () => {
    renderWithRedux(<App />);
    const btnRemove = screen.queryByTestId('id-remove');
    expect(btnRemove).not.toBeInTheDocument();
  });

  test('Testando a seleção de elemento', () => {
    renderWithRedux(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const btnAdd = screen.getByText('Adicionar');

    userEvent.type(inputTask, 'Exercitar');
    userEvent.click(btnAdd);
    userEvent.type(inputTask, 'Estudar');
    userEvent.click(btnAdd);

    const selectTask = screen.getByText('Exercitar');
    const removeButtons = screen.queryAllByText('Remover');

    expect(selectTask).toBeInTheDocument();
    expect(removeButtons).toHaveLength(0);

    userEvent.click(selectTask);
    const [removeButton] = screen.queryAllByText('Remover');
    expect(removeButton).toBeInTheDocument();

    userEvent.click(removeButton);
    expect(screen.queryByText('Exercitar')).not.toBeInTheDocument();
  });
});
