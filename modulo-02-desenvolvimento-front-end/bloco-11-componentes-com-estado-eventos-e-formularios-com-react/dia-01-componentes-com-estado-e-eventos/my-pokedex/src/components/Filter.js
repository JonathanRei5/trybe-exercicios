import React from 'react';
import Pokedex from './Pokedex';

class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: ['Fire', 'Psychic'],
      filterIndex: 0
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    const { textContent } = event.target;
    this.setState((state, _props) => ({
      filterIndex: state.filters.indexOf(textContent)
    }));
  }

  render() {
    const { filters, filterIndex } = this.state;
    const { pokemons } = this.props;

    return (
      <>
        <Pokedex pokemons={pokemons.filter((pokemon) =>
          pokemon.type === filters[filterIndex])} />
        <div onClick={this.handleFilter}>
          {filters.map((filter) => <button key={filter}>{filter}</button>)}
        </div>
      </>
    )
  }
}

export default Filter;
