import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />);
    listTodo.forEach((todo) => {
      const taskInput = screen.getByLabelText(/Tarefa/);
      const button = screen.getByRole('button', { name: 'Adicionar' });
      userEvent.type(taskInput, todo);
      userEvent.click(button);
      expect(screen.getByText(todo)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const TASK = 'Uma tarefa qualquer.';
    render(<Item content={ TASK } selectCallBack={ () => {} } />);
    expect(screen.getByText(TASK)).toBeInTheDocument();
  });
});
