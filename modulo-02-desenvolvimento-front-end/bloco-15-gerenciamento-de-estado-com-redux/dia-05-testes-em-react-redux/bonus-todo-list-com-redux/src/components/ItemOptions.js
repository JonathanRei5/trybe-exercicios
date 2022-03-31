import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  actionRemoveTask,
  actionToggleDoneTask,
  actionToggleInProgressTask,
} from '../redux/actions';

class ItemOptions extends Component {
  renderRemoveButton = () => {
    const { todo, removeTask } = this.props;
    return (
      <button type="button" onClick={() => { removeTask(todo.task); }} >
        Remover
      </button>
    )
  }

  renderDoneInput = () => {
    const { todo, toggleDoneTask } = this.props;
    return (
      <label htmlFor={`input_doneTask_id_${todo.id}`}>
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
    const { todo, toggleInProgressTask } = this.props;
    return (
      <label htmlFor={`input_inProgress_id_${todo.id}`}>
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

  renderOptions = () => (
    <div className="ItemOptions">
      {this.renderRemoveButton()}
      {this.renderDoneInput()}
      {this.renderInProgressInput()}
    </div>
  )

  render() {
    const { todo, selectedTask } = this.props;
    return (todo.task === selectedTask) && this.renderOptions();
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
