import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionAddTask } from '../redux/actions';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value });
  }

  addItem(value, callback) {
    this.setState({ textTodo: '' });
    callback(value);
  }

  render() {
    const { addTask } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">
          Tarefa:
          <input
            id="inputTodo"
            type="text"
            value={textTodo}
            onChange={(e) => this.changeTextTodo(e.target.value)}
          />
        </label>
        <input
          id="btnAdd"
          type="button"
          value="Adicionar"
          onClick={() => this.addItem(textTodo, addTask)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(actionAddTask(task)),
});

export default connect(null, mapDispatchToProps)(InputTodo);
