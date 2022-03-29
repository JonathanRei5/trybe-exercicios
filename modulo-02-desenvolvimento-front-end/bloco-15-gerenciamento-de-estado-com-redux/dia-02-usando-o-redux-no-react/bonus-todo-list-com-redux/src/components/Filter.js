import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionChangeFilter } from '../redux/actions';

class Filter extends Component {
  handleFilter = ({ target }) => {
    const { value } = target;
    const { changeFilter } = this.props;
    changeFilter(value);
  }

  render() {
    const { filter } = this.props;

    return (
      <div>
        <label htmlFor="filter">
          Filtro:
          <select
            name="filter"
            id="filter"
            value={filter}
            onChange={this.handleFilter}
          >
            <option value="all">Todas</option>
            <option value="done">Completas</option>
            <option value="inProgress">Em Andamento</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.reducerTodoList.filter,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (filter) => dispatch(actionChangeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
