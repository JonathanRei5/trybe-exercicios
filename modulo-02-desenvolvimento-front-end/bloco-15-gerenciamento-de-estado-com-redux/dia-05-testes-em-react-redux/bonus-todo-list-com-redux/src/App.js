import React, { Component } from 'react';
import Filter from './components/Filter';
import InputTodo from './components/InputTodo';
import Items from './components/Items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputTodo />
        <Filter />
        <Items />
      </div>
    );
  }
}

export default App;
