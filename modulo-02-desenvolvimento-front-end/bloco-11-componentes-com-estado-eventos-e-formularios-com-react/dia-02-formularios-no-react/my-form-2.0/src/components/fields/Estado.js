import React from 'react';
import ErrorMessage from '../ErrorMessage';

class Estado extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <>
        <label>
          Estado:
          <select
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            required
          >
            {this.props.estados.map((estado) => (
              <option value={estado[0]} key={estado[0]}>{estado[1]}</option>
            ))}
          </select>
        </label>
        {error && <ErrorMessage message={error} />}
      </>
    )
  }
}

export default Estado;
