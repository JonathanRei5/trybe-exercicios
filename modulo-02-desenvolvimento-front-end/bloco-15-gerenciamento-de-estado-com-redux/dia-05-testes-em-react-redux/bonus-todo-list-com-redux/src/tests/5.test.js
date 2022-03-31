import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from './helpers/renderWithRedux'
import App from '../App';

describe('Testando a funcionalidade de filtrar itens da lista', () => {
  const addTasks = (tasks) => {
    tasks.forEach((task) => {
      const taskInput = screen.getByLabelText(/Tarefa/);
      const addButton = screen.getByRole('button', { name: 'Adicionar' });
      userEvent.type(taskInput, task);
      userEvent.click(addButton);
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  };

  test('Verifica se a opção de filtrar existe na aplicação', () => {
    renderWithRedux(<App />);
    const inputFilterTask = screen.getByRole('combobox', { name: 'Filtro:' });
    const allFilteOption = screen.getByRole('option', { name: 'Todas' });
    const doneFilteOption = screen.getByRole('option', { name: 'Completas' });
    const inProgressFilteOption = screen.getByRole('option', { name: 'Em Andamento' });
    expect(inputFilterTask).toBeInTheDocument();
    expect(allFilteOption).toBeInTheDocument();
    expect(doneFilteOption).toBeInTheDocument();
    expect(inProgressFilteOption).toBeInTheDocument();
  });

  test('Verifica se as tarefas tem a opção de marcar como completa ou em andamento', () => {
    renderWithRedux(<App />);
    addTasks(['Fazer exercícios', 'Fazer projetos', 'Beber água']);
    const selectTask = screen.getByText('Fazer exercícios');
    userEvent.click(selectTask);

    const doneOption = screen.getByRole('checkbox', { name: 'Completa' });
    const inProgressOption = screen.getByRole('checkbox', { name: 'Em Andamento' });
    expect(doneOption).toBeInTheDocument();
    expect(inProgressOption).toBeInTheDocument();
  });

  test('Verifica se ao selecionar um filtro os itens aparece de acordo com o filtro', () => {
    renderWithRedux(<App />);
    addTasks(['Fazer exercícios', 'Fazer projetos', 'Beber água']);

    userEvent.click(screen.getByText('Fazer exercícios'));
    userEvent.click(screen.getByRole('checkbox', { name: 'Completa' }));
    expect(screen.getByRole('checkbox', { name: 'Completa' })).toBeChecked();

    userEvent.click(screen.getByText('Fazer projetos'));
    userEvent.click(screen.getByRole('checkbox', { name: 'Em Andamento' }));
    expect(screen.getByRole('checkbox', { name: 'Em Andamento' })).toBeChecked();

    userEvent.selectOptions(
      screen.getByRole('combobox', { name: 'Filtro:' }),
      ['done']
    );
    expect(screen.queryByText('Fazer exercícios')).toBeInTheDocument();
    expect(screen.queryByText('Fazer projetos')).not.toBeInTheDocument();
    expect(screen.queryByText('Beber água')).not.toBeInTheDocument();

    userEvent.selectOptions(
      screen.getByRole('combobox', { name: 'Filtro:' }),
      ['inProgress']
    );
    expect(screen.queryByText('Fazer exercícios')).not.toBeInTheDocument();
    expect(screen.queryByText('Fazer projetos')).toBeInTheDocument();
    expect(screen.queryByText('Beber água')).not.toBeInTheDocument();

    userEvent.selectOptions(
      screen.getByRole('combobox', { name: 'Filtro:' }),
      ['all']
    );
    expect(screen.queryByText('Fazer exercícios')).toBeInTheDocument();
    expect(screen.queryByText('Fazer projetos')).toBeInTheDocument();
    expect(screen.queryByText('Beber água')).toBeInTheDocument();
  });
});
