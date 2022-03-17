import React from 'react';
import ErrorMessage from '../ErrorMessage';

class Select extends React.Component {
  render() {
    const {
      labelClass,
      options,
      label,
      name,
      select,
      onChange,
      required,
      error,
    } = this.props;
    return (
      <>
        <label className={labelClass}>
          <span>{label}</span>
          <select
            name={name}
            value={select}
            onChange={onChange}
            required={required}
          >
            {options.map((option) => (
              <option value={option[0]} key={option[0]}>{option[1]}</option>
            ))}
          </select>
        </label>
        {error && <ErrorMessage message={error} />}
      </>
    )
  }
}

export default Select;
