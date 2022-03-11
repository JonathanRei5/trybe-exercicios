import React from 'react';
import ErrorMessage from '../ErrorMessage';

class TextArea extends React.Component {
  render() {
    const {
      label,
      name,
      value,
      onChange,
      maxLength,
      required,
      error,
    } = this.props;
    return (
      <>
        <label>
          {label}
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            required={required}
          />
        </label>
        {error && <ErrorMessage message={error} />}
      </>
    )
  }
}

export default TextArea;
