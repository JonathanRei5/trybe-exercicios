import React from 'react';

class TipoResidencia extends React.Component {
  render() {
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
      </>
    )
  }
}

export default TipoResidencia;
