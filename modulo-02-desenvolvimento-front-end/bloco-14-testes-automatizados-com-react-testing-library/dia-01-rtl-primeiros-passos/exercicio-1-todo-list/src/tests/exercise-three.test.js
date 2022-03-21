import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando funcionalidade de apagar item selecionado', () => {
  test(`Não deve haver botões de remover
        após a primeira renderização da página`, () => {
    render(<App />);
    const btnRemove = screen.queryByTestId('id-remove');
    expect(btnRemove).not.toBeInTheDocument();
  });

  test('Testando a seleção de elemento', async () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const btnAdd = screen.getByText('Adicionar');

    userEvent.type(inputTask, 'Exercitar');
    userEvent.click(btnAdd);
    userEvent.type(inputTask, 'Estudar');
    userEvent.click(btnAdd);

    const [btnRemove] = await screen.findAllByText('Remover');
    const selectTask = screen.getByText('Exercitar');

    expect(selectTask).toBeInTheDocument();
    expect(btnRemove.disabled).toBe(true);
    userEvent.click(selectTask);
    expect(btnRemove.disabled).toBe(false);
    userEvent.click(btnRemove);
    expect(screen.queryByText('Exercitar')).not.toBeInTheDocument();
  });
});
