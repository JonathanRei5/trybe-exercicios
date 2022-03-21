import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const winnerSymbols = ['X', 'O'];

winnerSymbols.forEach((winnerSymbol) => {
  describe(`Condições de vitória para o Jogador ${winnerSymbol}`, () => {
    const getStartOfAnotherLine = (cellId) => {
      if (cellId >= 0 && cellId <= 2) return 3;
      if (cellId >= 3 && cellId <= 5) return 6;
      return 0;
    };

    const firstCellsOfLines = [0, 3, 6];
    firstCellsOfLines.forEach((cellId) => {
      test(`Alcançar a vitória ao colocar o mesmo simbolo em todas as casas da linha a partir da casa ${cellId}`, () => {
        const opponentsLine = getStartOfAnotherLine(cellId);
        render(<App />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherLine(opponentsLine);
          userEvent.click(screen.getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        userEvent.click(screen.getByTestId(`cell_${cellId}`));
        userEvent.click(screen.getByTestId(`cell_${opponentsLine}`));
        userEvent.click(screen.getByTestId(`cell_${cellId + 1}`));
        userEvent.click(screen.getByTestId(`cell_${opponentsLine + 1}`));
        userEvent.click(screen.getByTestId(`cell_${cellId + 2}`));
        expect(screen.queryByText(`Player ${winnerSymbol} Ganhou`)).toBeInTheDocument();
      });
    });

    const getStartOfAnotherColumn = (cellId) => {
      if (cellId === 0 || cellId === 3 || cellId === 6) return 1;
      if (cellId === 1 || cellId === 4 || cellId === 7) return 2;
      return 0;
    };

    const firstCellsOfColumns = [0, 1, 2];
    firstCellsOfColumns.forEach((cellId) => {
      test(`Alcançar a vitória ao colocar o mesmo simbolo em todas as casas da coluna ${cellId}`, () => {
        const opponentsColumn = getStartOfAnotherColumn(cellId);
        render(<App />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherColumn(opponentsColumn);
          userEvent.click(screen.getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        userEvent.click(screen.getByTestId(`cell_${cellId}`));
        userEvent.click(screen.getByTestId(`cell_${opponentsColumn}`));
        userEvent.click(screen.getByTestId(`cell_${cellId + 3}`));
        userEvent.click(screen.getByTestId(`cell_${opponentsColumn + 3}`));
        userEvent.click(screen.getByTestId(`cell_${cellId + 6}`));
        expect(screen.queryByText(`Player ${winnerSymbol} Ganhou`)).toBeInTheDocument();
      });
    });

    test('Alcançar a vitória ao colocar o mesmo simbolo na diagonal esquerda para direita (primeira,quinta,nona casa)', () => {
      render(<App />);

      if (winnerSymbol === 'O') userEvent.click(screen.getByTestId('cell_5'));
      userEvent.click(screen.getByTestId('cell_0'));
      userEvent.click(screen.getByTestId('cell_2'));
      userEvent.click(screen.getByTestId('cell_4'));
      userEvent.click(screen.getByTestId('cell_3'));
      userEvent.click(screen.getByTestId('cell_8'));
      expect(screen.queryByText(`Player ${winnerSymbol} Ganhou`)).toBeInTheDocument();
    });

    test('Alcançar a vitória ao colocar o mesmo simbolo na diagonal direita para esquerda (terceira,quinta,sétima casa)', () => {
      render(<App />);

      if (winnerSymbol === 'O') userEvent.click(screen.getByTestId('cell_5'));
      userEvent.click(screen.getByTestId('cell_2'));
      userEvent.click(screen.getByTestId('cell_1'));
      userEvent.click(screen.getByTestId('cell_4'));
      userEvent.click(screen.getByTestId('cell_3'));
      userEvent.click(screen.getByTestId('cell_6'));
      expect(screen.queryByText(`Player ${winnerSymbol} Ganhou`)).toBeInTheDocument();
    });
  });
});
