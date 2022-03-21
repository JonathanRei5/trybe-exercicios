import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

function tieTheGame() {
  userEvent.click(screen.getByTestId('cell_0'));
  userEvent.click(screen.getByTestId('cell_2'));
  userEvent.click(screen.getByTestId('cell_6'));
  userEvent.click(screen.getByTestId('cell_8'));
  userEvent.click(screen.getByTestId('cell_5'));
  userEvent.click(screen.getByTestId('cell_3'));
  userEvent.click(screen.getByTestId('cell_1'));
  userEvent.click(screen.getByTestId('cell_4'));
  userEvent.click(screen.getByTestId('cell_7'));
}

describe('bonus', () => {
  test('Empatar um jogo', () => {
    render(<App />);
    tieTheGame();
    expect(screen.queryByText(/Empate/)).toBeInTheDocument();
  });

  test('Conter um botão de reiniciar o jogo', () => {
    render(<App />);
    const restartButton = screen.getByRole('button', { name: 'Reiniciar' });
    expect(restartButton).toBeInTheDocument();
  });

  test('Reiniciar um jogo empatado', () => {
    render(<App />);
    tieTheGame();
    const restartButton = screen.getByRole('button', { name: 'Reiniciar' });
    expect(screen.queryByText(/Empate/)).toBeInTheDocument();
    userEvent.click(restartButton);
    expect(screen.queryByAltText(/X/)).not.toBeInTheDocument();
    expect(screen.queryByAltText(/O/)).not.toBeInTheDocument();
  });

  test('Reiniciar um jogo no meio da partida', () => {
    render(<App />);
    userEvent.click(screen.getByTestId('cell_0'));
    userEvent.click(screen.getByTestId('cell_2'));
    userEvent.click(screen.getByTestId('cell_6'));
    userEvent.click(screen.getByTestId('cell_8'));
    userEvent.click(screen.getByTestId('cell_5'));
    const restartButton = screen.getByRole('button', { name: 'Reiniciar' });
    userEvent.click(restartButton);
    expect(screen.queryByAltText(/X/)).not.toBeInTheDocument();
    expect(screen.queryByAltText(/O/)).not.toBeInTheDocument();
  });

  test('Reiniciar um jogo ganho pelo jogador X', () => {
    render(<App />);
    userEvent.click(screen.getByTestId('cell_0'));
    userEvent.click(screen.getByTestId('cell_3'));
    userEvent.click(screen.getByTestId('cell_1'));
    userEvent.click(screen.getByTestId('cell_4'));
    userEvent.click(screen.getByTestId('cell_2'));
    expect(screen.queryByText('Player X Ganhou')).toBeInTheDocument();
    const restartButton = screen.getByRole('button', { name: 'Reiniciar' });
    userEvent.click(restartButton);
    expect(screen.queryByAltText(/X/)).not.toBeInTheDocument();
    expect(screen.queryByAltText(/O/)).not.toBeInTheDocument();
  });

  test('Reiniciar um jogo ganho pelo jogador O', () => {
    render(<App />);
    userEvent.click(screen.getByTestId('cell_0'));
    userEvent.click(screen.getByTestId('cell_3'));
    userEvent.click(screen.getByTestId('cell_1'));
    userEvent.click(screen.getByTestId('cell_4'));
    userEvent.click(screen.getByTestId('cell_6'));
    userEvent.click(screen.getByTestId('cell_5'));
    expect(screen.queryByText('Player O Ganhou')).toBeInTheDocument();
    const restartButton = screen.getByRole('button', { name: 'Reiniciar' });
    userEvent.click(restartButton);
    expect(screen.queryByAltText(/X/)).not.toBeInTheDocument();
    expect(screen.queryByAltText(/O/)).not.toBeInTheDocument();
  });
});
