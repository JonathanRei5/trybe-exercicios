import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: [],
      selectedTodo: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo(todo) {
    this.setState((state) => {
      const { selectedTodo } = state;
      return todo === selectedTodo ? { selectedTodo: '' } : { selectedTodo: todo };
    });
  }

  removeTodo(todo) {
    this.setState((state) => ({
      listTodo: [...state.listTodo.filter((todoInList) => todo !== todoInList)],
    }));
  }

  render() {
    const { listTodo, selectedTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        {listTodo
        && (
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={ index + 1 }>
                  <Item content={ todo } selectCallBack={ this.selectTodo } />
                  <button
                    type="button"
                    data-testid="id-remove"
                    onClick={ () => { this.removeTodo(todo); } }
                    disabled={ selectedTodo !== todo }
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

export default App;
