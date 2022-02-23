import React from 'react';

class CPF extends React.Component {
  render() {
    return (
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
    )
  }
}

export default CPF;
