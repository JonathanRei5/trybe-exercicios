import React from 'react';
import ErrorMessage from '../ErrorMessage';

class Email extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <>
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
        {error && <ErrorMessage message={error} />}
      </>
    )
  }
}

export default Email;
