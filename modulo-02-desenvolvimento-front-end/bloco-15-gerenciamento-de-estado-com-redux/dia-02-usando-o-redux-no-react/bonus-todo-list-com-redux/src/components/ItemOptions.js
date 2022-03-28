import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  actionRemoveTask,
  actionToggleDoneTask,
  actionToggleInProgressTask,
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

  renderDoneInput = () => {
    const { todo, selectedTask, toggleDoneTask } = this.props;
    return (
      <label htmlFor={`input_doneTask_id_${todo.id}`} hidden={selectedTask !== todo.task}>
        Completa
        <input
          type="checkbox"
          name="doneTask"
          id={`input_doneTask_id_${todo.id}`}
          checked={todo.done}
          onChange={() => { toggleDoneTask(todo.task); }}
        />
      </label>
    )
  }

  renderInProgressInput = () => {
    const { todo, selectedTask, toggleInProgressTask } = this.props;
    return (
      <label htmlFor={`input_inProgress_id_${todo.id}`} hidden={selectedTask !== todo.task}>
        Em Andamento
        <input
          type="checkbox"
          name="inProgress"
          id={`input_inProgress_id_${todo.id}`}
          checked={todo.inProgress}
          onChange={() => { toggleInProgressTask(todo.task); }}
        />
      </label>
    )
  }

  render() {
    return (
      <>
        {this.renderRemoveButton()}
        {this.renderDoneInput()}
        {this.renderInProgressInput()}
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
  toggleInProgressTask: (task) => dispatch(actionToggleInProgressTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemOptions);
