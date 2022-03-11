import React from 'react';
import ErrorMessage from '../ErrorMessage';

class Input extends React.Component {
  render() {
    const {
      label,
      type,
      name,
      value,
      maxLength,
      required,
      onChange,
      onBlur,
      error,
    } = this.props;
    return (
      <>
        <label>
          {label}
          <input
            type={type}
            name={name}
            value={value}
            maxLength={maxLength}
            required={required}
            onChange={onChange}
            onBlur={onBlur}
          />
        </label>
        {error && <ErrorMessage message={error} />}
      </>
    )
  }
}

export default Input;
