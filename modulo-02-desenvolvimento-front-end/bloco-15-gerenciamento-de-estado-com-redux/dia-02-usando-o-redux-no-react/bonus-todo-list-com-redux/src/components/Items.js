import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import ItemOptions from './ItemOptions';

class Items extends Component {
  render() {
    const { todoList, filter } = this.props;

    return (
      <ul>
        {
          todoList
            .filter((todo) => {
              if (filter === 'all') return true;
              return todo[filter];
            })
            .map((todo, index) => (
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
  filter: state.reducerTodoList.filter,
});

export default connect(mapStateToProps, null)(Items);
