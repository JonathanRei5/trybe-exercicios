import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Comportamento de cada casa', () => {
  test('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {
    render(<App />);

    userEvent.click(screen.getByTestId('cell_0'));
    expect(screen.getByAltText(/X/)).toBeInTheDocument();
    expect(screen.queryByAltText(/O/)).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('cell_5'));
    expect(screen.getByAltText(/X/)).toBeInTheDocument();
    expect(screen.getByAltText(/O/)).toBeInTheDocument();

    userEvent.click(screen.getByTestId('cell_8'));
    expect(screen.getAllByAltText(/X/)).toHaveLength(2);
    expect(screen.getByAltText(/O/)).toBeInTheDocument();
  });

  test('O simbolo precisa ser trocado ao clicar em uma casa para a outra, \'X\' para \'O\', começando com o \'X\'', () => {
    render(<App />);

    userEvent.click(screen.getByTestId('cell_2'));
    expect(screen.getByAltText(/X/)).toBeInTheDocument();
    expect(screen.queryByAltText(/O/)).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('cell_7'));
    expect(screen.getByAltText(/X/)).toBeInTheDocument();
    expect(screen.getByAltText(/O/)).toBeInTheDocument();
  });

  test('Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo', () => {
    render(<App />);

    const cell = screen.getByTestId('cell_0');
    userEvent.click(cell);

    const symbol = screen.getByAltText(/X/);
    expect(cell).toContainElement(symbol);

    userEvent.click(cell);
    expect(cell).toContainElement(symbol);
  });

  test('O simbolo das casas precisam ser mantidas, quando outra casa for clicada', () => {
    render(<App />);
    const cell0 = screen.getByTestId('cell_0');
    const cell1 = screen.getByTestId('cell_1');
    const cell2 = screen.getByTestId('cell_2');

    userEvent.click(cell0);
    const symbolX = screen.getByAltText(/X/);

    userEvent.click(cell1);
    const symbolO = screen.getByAltText(/O/);

    userEvent.click(cell2);
    expect(cell0).toContainElement(symbolX);
    expect(cell1).toContainElement(symbolO);
  });

  test('O simbolo não pode ser mudado se a casa for clicada duas vezes seguidas.', () => {
    render(<App />);

    const cell = screen.getByTestId('cell_0');
    userEvent.click(cell);

    const symbol = screen.getByAltText(/X/);
    expect(cell).toContainElement(symbol);

    userEvent.click(cell);
    userEvent.click(cell);
    expect(cell).toContainElement(symbol);
  });
});
