import React from "react";
import '../css/ErrorMessage.css';

class ErrorMessage extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div className="ErrorMessage">
        <div className="message">{message}</div>
      </div>
    );
  }
}

export default ErrorMessage;
