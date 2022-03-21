import React from 'react';
import PropTypes from 'prop-types';
import xImage from './x.png';
import oImage from './o.svg';
import './GameCell.css';

class GameCell extends React.Component {
    handleOnKeyDown = ({ code }) => {
      const { onClick } = this.props;
      if (code === 'Enter'
          || code === 'NumpadEnter'
          || code === 'Space') {
        onClick();
      }
    };

    render() {
      const { id, onClick, content } = this.props;

      return (
        <div
          key={ id }
          data-testid={ `cell_${id}` }
          className="game-cell"
          onClick={ onClick }
          onKeyDown={ this.handleOnKeyDown }
          role="button"
          tabIndex={ 0 }
        >
          {content === 1 && <img src={ xImage } alt="Símbolo X" />}
          {content === 2 && <img src={ oImage } alt="Símbolo O" />}
        </div>
      );
    }
}

GameCell.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  content: PropTypes.number.isRequired,
};

export default GameCell;
