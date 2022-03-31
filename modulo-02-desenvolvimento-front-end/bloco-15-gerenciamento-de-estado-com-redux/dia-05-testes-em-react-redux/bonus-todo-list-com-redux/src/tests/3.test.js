import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from './helpers/renderWithRedux'
import App from '../App';
import Item from '../components/Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    renderWithRedux(<App />);
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
    renderWithRedux(<Item content={{ task: TASK }} selectCallBack={() => { }} />);
    expect(screen.getByText(TASK)).toBeInTheDocument();
  });
});
