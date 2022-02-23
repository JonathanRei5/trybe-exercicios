import React from 'react';

class Estado extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Estado;
