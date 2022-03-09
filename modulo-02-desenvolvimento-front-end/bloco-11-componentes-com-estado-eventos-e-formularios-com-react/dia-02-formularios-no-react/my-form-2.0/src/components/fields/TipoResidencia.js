import React from 'react';
import ErrorMessage from '../ErrorMessage';

class TipoResidencia extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <>
        <label>
          Casa:
          <input
            type="radio"
            name={this.props.name}
            value="Casa"
            checked={this.props.value === "Casa"}
            onChange={this.props.onChange}
            required
          />
        </label>
        <label>
          Apartamento:
          <input
            type="radio"
            name={this.props.name}
            value="Apartamento"
            checked={this.props.value === "Apartamento"}
            onChange={this.props.onChange}
            required
          />
        </label>
        {error && <ErrorMessage message={error} />}
      </>
    )
  }
}

export default TipoResidencia;
