import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from './helpers/renderWithRedux'
import App from '../App';

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test(`Verificando se o botão está na tela
        e se o ele contém o texto "Adicionar"`, () => {
    renderWithRedux(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Adicionar');
  });

  test(`Ao clicar no botão, é necessário adicionar
        o que o usuário digitou à lista`, () => {
    renderWithRedux(<App />);
    const button = screen.getByRole('button');
    const taskInput = screen.getByLabelText(/Tarefa/);

    const TASK_ONE = 'Resolver esse exercício.';
    userEvent.type(taskInput, TASK_ONE);
    userEvent.click(button);
    expect(screen.getByText(TASK_ONE)).toBeInTheDocument();

    const TASK_TWO = 'Resolver os próximos exercícios!';
    userEvent.type(taskInput, TASK_TWO);
    userEvent.click(button);
    expect(screen.getByText(TASK_TWO)).toBeInTheDocument();
  });
});
