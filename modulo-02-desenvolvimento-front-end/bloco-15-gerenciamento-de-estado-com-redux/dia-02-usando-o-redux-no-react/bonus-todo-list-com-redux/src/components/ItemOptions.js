import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  actionRemoveTask,
  actionToggleDoneTask
} from '../redux/actions';

class ItemOptions extends Component {
  renderRemoveButton = () => {
    const { todo, selectedTask, removeTask } = this.props;
    return (
      <button
        type="button"
        onClick={() => { removeTask(todo.task); }}
        hidden={selectedTask !== todo.task}
      >
        Remover
      </button>
    )
  }

  renderDoneButton = () => {
    const { todo, selectedTask, toggleDoneTask } = this.props;
    return (
      <label hidden={selectedTask !== todo.task}>
        Completa
        <input
          type="checkbox"
          name="complete"
          id="input_complete"
          checked={todo.done}
          onChange={() => { toggleDoneTask(todo.task); }}
        />
      </label>
    )
  }

  render() {
    return (
      <>
        {this.renderRemoveButton()}
        {this.renderDoneButton()}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedTask: state.reducerTodoList.selectedTask,
});

const mapDispatchToProps = (dispatch) => ({
  removeTask: (task) => dispatch(actionRemoveTask(task)),
  toggleDoneTask: (task) => dispatch(actionToggleDoneTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemOptions);
