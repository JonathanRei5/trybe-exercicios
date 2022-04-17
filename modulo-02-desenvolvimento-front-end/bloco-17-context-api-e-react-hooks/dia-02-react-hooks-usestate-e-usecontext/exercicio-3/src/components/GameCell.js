import React from 'react';
import PropTypes from 'prop-types';
import xImage from '../images/x.png';
import oImage from '../images/o.svg';
import '../styles/GameCell.css';

function GameCell({ id, onClick, content }) {
  const handleOnKeyDown = ({ code }) => {
    if (code === 'Enter'
          || code === 'NumpadEnter'
          || code === 'Space') {
      onClick();
    }
  };

  return (
    <div
      key={ id }
      data-testid={ `cell_${id}` }
      className="game-cell"
      onClick={ onClick }
      onKeyDown={ handleOnKeyDown }
      role="button"
      tabIndex={ 0 }
    >
      {content === 1 && <img src={ xImage } alt="Símbolo X" />}
      {content === 2 && <img src={ oImage } alt="Símbolo O" />}
    </div>
  );
}

GameCell.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  content: PropTypes.number.isRequired,
};

export default GameCell;
