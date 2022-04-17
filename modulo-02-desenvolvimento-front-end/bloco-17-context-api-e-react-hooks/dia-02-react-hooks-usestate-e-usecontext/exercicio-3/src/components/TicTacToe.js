import React, { useEffect, useState } from 'react';
import GameBoard from './GameBoard';
import '../styles/TicTacToe.css';

function TicTacToe() {
  const [state, setState] = useState({
    activePlayer: 1,
    gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    filledCells: 0,
    winner: '',
  });

  const checkLineWinner = (gameBoard) => {
    const lastLine = 6;
    const totalColumns = 3;
    for (let line = 0; line <= lastLine; line += totalColumns) {
      let lineCells = '';
      for (let cell = line; cell < line + totalColumns; cell += 1) {
        lineCells += gameBoard[cell];
      }
      if (lineCells === '111') return 'X';
      if (lineCells === '222') return 'O';
    }
    return '';
  };

  const checkColumnWinner = (gameBoard) => {
    const lastLine = 6;
    const totalColumns = 3;
    for (let column = 0; column < totalColumns; column += 1) {
      let columnCells = '';
      for (let cell = column; cell <= lastLine + column; cell += totalColumns) {
        columnCells += gameBoard[cell];
      }
      if (columnCells === '111') return 'X';
      if (columnCells === '222') return 'O';
    }
    return '';
  };

  const checkDiagonalWinner = (gameBoard) => {
    const totalCells = gameBoard.length;
    const totalColumns = 3;
    let diagonalCells = '';

    for (let cell = 0; cell < totalCells; cell += totalColumns + 1) {
      diagonalCells += gameBoard[cell];
    }
    if (diagonalCells === '111') return 'X';
    if (diagonalCells === '222') return 'O';

    diagonalCells = '';
    for (let cell = totalColumns - 1; cell < totalCells - 1; cell += totalColumns - 1) {
      diagonalCells += gameBoard[cell];
    }
    if (diagonalCells === '111') return 'X';
    if (diagonalCells === '222') return 'O';

    return '';
  };

  const checkWinner = () => {
    const { gameBoard } = state;
    let winner = checkLineWinner(gameBoard);
    if (winner) return winner;
    winner = checkColumnWinner(gameBoard);
    if (winner) return winner;
    return checkDiagonalWinner(gameBoard);
  };

  const updateGame = (index) => {
    const {
      activePlayer, gameBoard, filledCells, winner,
    } = state;
    if (gameBoard[index] !== 0) return;
    if (winner) return;
    const newGameBoard = [...gameBoard];
    newGameBoard[index] = activePlayer;

    setState({
      ...state,
      activePlayer: activePlayer === 1 ? 2 : 1,
      gameBoard: newGameBoard,
      filledCells: filledCells + 1,
    });
  };

  const restartGame = () => {
    setState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      filledCells: 0,
      winner: '',
    });
  };

  const redenderRestartButton = () => (
    <button
      type="button"
      className="btnRestartGame"
      onClick={ restartGame }
    >
      Reiniciar
    </button>
  );

  useEffect(() => {
    const winner = checkWinner();
    if (winner) setState({ ...state, winner });
  }, [state.filledCells]);

  const { gameBoard, winner, filledCells } = state;
  let messageElement = null;
  if (winner) {
    messageElement = <p className="endGameMessage">{`Player ${winner} Ganhou`}</p>;
  } else if (gameBoard.length === filledCells) {
    messageElement = <p className="endGameMessage">Empate</p>;
  }

  return (
    <div className="TicTacToe">
      <GameBoard gameState={ gameBoard } updateGame={ updateGame } />
      {messageElement && <p className="endGameMessage">Fim de jogo</p>}
      {messageElement}
      {redenderRestartButton()}
    </div>
  );
}

export default TicTacToe;
