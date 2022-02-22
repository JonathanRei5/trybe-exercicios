import React from 'react';
import '../css/Button.css';

class Button extends React.Component {
  render() {
    const { value, disabled, className } = this.props;
    return (
      <button className={`Button ${className}`}
        disabled={disabled}>{value}</button>
    )
  }
}

export default Button;
