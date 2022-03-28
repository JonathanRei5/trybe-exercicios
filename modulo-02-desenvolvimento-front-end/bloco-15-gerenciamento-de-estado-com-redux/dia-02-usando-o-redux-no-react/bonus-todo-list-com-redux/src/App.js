import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputTodo from './InputTodo';
import Item from './Item';
import { actionRemoveTask } from './redux/actions';

class App extends Component {
  render() {
    const {
      todoList,
      selectedTask,
      removeTask,
    } = this.props;

    return (
      <div className="App">
        <InputTodo />
        {todoList
          && (
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
          )}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
