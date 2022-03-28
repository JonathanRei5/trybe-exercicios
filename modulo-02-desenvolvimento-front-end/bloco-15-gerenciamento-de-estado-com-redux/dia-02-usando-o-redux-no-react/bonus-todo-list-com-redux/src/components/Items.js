import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionRemoveTask } from '../redux/actions';
import Item from './Item';

class Items extends Component {
  render() {
    const {
      todoList,
      selectedTask,
      removeTask,
    } = this.props;

    return (
      <ul>
        {
          todoList.map((todo, index) => (
            <li key={index + 1}>
              <Item content={todo} />
              <button
                type="button"
                data-testid="id-remove"
                onClick={() => { removeTask(todo); }}
                disabled={selectedTask !== todo}
              >
                Remover
              </button>
            </li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.reducerTodoList.todoList,
  selectedTask: state.reducerTodoList.selectedTask,
});

const mapDispatchToProps = (dispatch) => ({
  removeTask: (task) => dispatch(actionRemoveTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
