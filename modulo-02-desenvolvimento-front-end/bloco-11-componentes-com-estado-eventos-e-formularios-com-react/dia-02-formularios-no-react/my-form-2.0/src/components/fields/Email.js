import React from 'react';

class Email extends React.Component {
  render() {
    return (
      <label>
        Email:
        <input
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          maxLength="50"
          required
        />
      </label>
    )
  }
}

export default Email;
