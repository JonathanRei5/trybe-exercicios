import React from 'react';

class Cidade extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Cidade;
