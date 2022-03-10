import React from 'react';
import '../css/Button.css';

class Button extends React.Component {
  render() {
    const { value, disabled, className, onClick } = this.props;
    return (
      <button
        className={`Button ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {value}
      </button>
    )
  }
}

export default Button;
