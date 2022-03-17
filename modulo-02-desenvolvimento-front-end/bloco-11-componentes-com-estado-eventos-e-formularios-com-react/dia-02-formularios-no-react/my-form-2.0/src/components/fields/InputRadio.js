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
        <input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          checked={select === value}
        />
        {label}
      </label>
    )
  }

  render() {
    const {
      labelClass,
      label,
      inputs,
      error,
    } = this.props;
    return (
      <>
        <div className={labelClass}>
          <span>{label}</span>
          {inputs.map(this.renderInputRadio)}
        </div>
        {error && <ErrorMessage message={error} />}
      </>
    )
  }
}

export default InputRadio;
