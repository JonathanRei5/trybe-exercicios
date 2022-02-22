import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";
import "../css/Pokedex.css";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonIndex: 0,
      filteredPokemons: this.props.pokemons,
      filters: ['All', 'Fire', 'Psychic'],
      filterIndex: 0
    };

    this.handleNextPokemon = this.handleNextPokemon.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleNextPokemon() {
    this.setState((state, _props) => {
      const { filteredPokemons } = this.state;
      const nextIndex = state.pokemonIndex + 1;
      return (nextIndex < filteredPokemons.length)
        ? { pokemonIndex: state.pokemonIndex + 1 }
        : { pokemonIndex: 0 }
    });
  }

  handleFilter(event) {
    if (event.target.tagName === 'BUTTON') {
      const { textContent } = event.target;
      this.setState((state, props) => {
        const { pokemons } = props;

        const filterIndex = state.filters.indexOf(textContent);
        const filteredPokemons = pokemons.filter((pokemon) => (
          (filterIndex === 0)
            ? true
            : pokemon.type === state.filters[filterIndex]
        ));

        return {
          filterIndex,
          filteredPokemons,
          pokemonIndex: 0
        }
      });
      console.log(textContent);
    }
  }

  render() {
    const { filteredPokemons, pokemonIndex, filters } = this.state;

    return (
      <div className="pokedex">
        {
          (pokemonIndex < filteredPokemons.length)
            ? <Pokemon pokemon={filteredPokemons[pokemonIndex]} />
            : <></>
        }
        <div className="filter" onClick={this.handleFilter}>
          {filters.map((filter) => <button key={filter}>{filter}</button>)}
        </div>
        <button onClick={this.handleNextPokemon}>Próximo</button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  )
}

export default Pokedex;
