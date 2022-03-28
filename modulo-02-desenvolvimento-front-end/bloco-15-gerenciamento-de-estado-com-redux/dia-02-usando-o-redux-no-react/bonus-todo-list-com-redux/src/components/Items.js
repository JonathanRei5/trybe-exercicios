import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import ItemOptions from './ItemOptions';

class Items extends Component {
  render() {
    const { todoList } = this.props;

    return (
      <ul>
        {
          todoList.map((todo, index) => (
            <li key={index + 1}>
              <Item content={todo} />
              <ItemOptions todo={todo} />
            </li>
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.reducerTodoList.todoList,
});

export default connect(mapStateToProps, null)(Items);
