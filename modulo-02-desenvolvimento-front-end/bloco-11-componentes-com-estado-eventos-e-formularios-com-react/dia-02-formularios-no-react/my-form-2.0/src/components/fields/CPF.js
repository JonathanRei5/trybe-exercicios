import React from 'react';
import ErrorMessage from '../ErrorMessage';

class CPF extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <>
        <label>
          CPF:
          <input
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            maxLength="11"
            required
          />
        </label>
        {error && <ErrorMessage message={error} />}
      </>
    )
  }
}

export default CPF;
