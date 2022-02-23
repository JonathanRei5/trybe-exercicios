import React from 'react';

class Nome extends React.Component {
  render() {
    return (
      <label>
        Nome:
        <input
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={(event) => {
            event.target.value = event.target.value.toUpperCase();
            this.props.onChange(event);
          }}
          maxLength="40"
          required
        />
      </label>
    )
  }
}

export default Nome;
