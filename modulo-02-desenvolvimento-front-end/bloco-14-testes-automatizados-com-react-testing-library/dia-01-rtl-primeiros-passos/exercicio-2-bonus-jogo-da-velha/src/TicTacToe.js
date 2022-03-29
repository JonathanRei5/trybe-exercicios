import React from 'react';
import GameBoard from './GameBoard';
import './TicTacToe.css';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      filledCells: 0,
      winner: '',
    };
  }

  checkLineWinner = (gameBoard) => {
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
  }

  checkColumnWinner = (gameBoard) => {
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
  }

  checkDiagonalWinner = (gameBoard) => {
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
  }

  checkWinner = () => {
    const { gameBoard } = this.state;
    let winner = this.checkLineWinner(gameBoard);
    if (winner) return winner;
    winner = this.checkColumnWinner(gameBoard);
    if (winner) return winner;
    return this.checkDiagonalWinner(gameBoard);
  }

  updateGame = (index) => {
    const { activePlayer, gameBoard, filledCells } = this.state;
    let { winner } = this.state;
    if (gameBoard[index] !== 0) return;
    if (winner) return;
    const newGameBoard = [...gameBoard];
    newGameBoard[index] = activePlayer;

    this.setState({
      activePlayer: activePlayer === 1 ? 2 : 1,
      gameBoard: newGameBoard,
      filledCells: filledCells + 1,
    }, () => {
      winner = this.checkWinner();
      if (winner) this.setState({ winner });
    });
  }

  restartGame = () => {
    this.setState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      filledCells: 0,
      winner: '',
    });
  }

  redenderRestartButton = () => (
    <button
      type="button"
      className="btnRestartGame"
      onClick={ this.restartGame }
    >
      Reiniciar
    </button>
  )

  render() {
    const { gameBoard, winner, filledCells } = this.state;
    let messageElement = null;
    if (winner) {
      messageElement = <p className="endGameMessage">{`Player ${winner} Ganhou`}</p>;
    } else if (gameBoard.length === filledCells) {
      messageElement = <p className="endGameMessage">Empate</p>;
    }
    return (
      <div className="TicTacToe">
        <GameBoard gameState={ gameBoard } updateGame={ this.updateGame } />
        {messageElement && <p className="endGameMessage">Fim de jogo</p>}
        {messageElement}
        {this.redenderRestartButton()}
      </div>
    );
  }
}

export default TicTacToe;
