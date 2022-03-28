import React, { Component } from 'react';
import InputTodo from './components/InputTodo';
import Items from './components/Items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputTodo />
        <Items />
      </div>
    );
  }
}

export default App;
