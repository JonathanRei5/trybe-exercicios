import React from 'react';
import ErrorMessage from '../ErrorMessage';

class Cidade extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <>
        <label>
          Cidade:
          <input
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            onBlur={function ({ target }) {
              if (/^\d/g.test(target.value)) {
                target.value = '';
              }
            }}
            maxLength="28"
            required
          />
        </label>
        {error && <ErrorMessage message={error} />}
      </>
    )
  }
}

export default Cidade;
