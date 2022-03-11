import React from 'react';
import ErrorMessage from '../ErrorMessage';

class InputRadio extends React.Component {
  renderInputRadio = ({ label, name, value }) => {
    const {
      select,
      onChange,
      required,
    } = this.props;
    return (
      <label key={value}>
        {label}
        <input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          checked={select === value}
        />
      </label>
    )
  }

  render() {
    const {
      label,
      inputs,
      error,
    } = this.props;
    return (
      <>
        <div>
          {label}
          {inputs.map(this.renderInputRadio)}
          {error && <ErrorMessage message={error} />}
        </div>
      </>
    )
  }
}

export default InputRadio;
