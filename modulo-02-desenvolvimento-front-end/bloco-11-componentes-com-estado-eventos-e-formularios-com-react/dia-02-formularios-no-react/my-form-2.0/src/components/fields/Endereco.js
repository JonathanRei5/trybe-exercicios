import React from 'react';
import ErrorMessage from '../ErrorMessage';

class Endereco extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <>
        <label>
          Endereco:
          <input
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={(event) => {
              const { target } = event;
              target.value = target.value.replace(/[^\w|\d|\s]/g, '');
              this.props.onChange(event);
            }}
            maxLength="200"
            required
          />
        </label>
        {error && <ErrorMessage message={error} />}
      </>
    )
  }
}

export default Endereco;
