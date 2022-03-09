import React from 'react';
import ErrorMessage from '../ErrorMessage';

class Nome extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <>
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
        {error && <ErrorMessage message={error} />}
      </>
    )
  }
}

export default Nome;
