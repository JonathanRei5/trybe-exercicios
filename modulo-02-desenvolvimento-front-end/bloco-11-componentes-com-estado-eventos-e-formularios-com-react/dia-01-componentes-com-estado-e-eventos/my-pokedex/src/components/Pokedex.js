import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";
import Button from "./Button";
import "../css/Pokedex.css";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonIndex: 0,
      filteredPokemons: this.props.pokemons,
      filters: this.props.pokemons.reduce((filter, pokemon) => {
        if (!filter.includes(pokemon.type)) {
          filter.push(pokemon.type);
        }
        return filter;
      }, ['All']),
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
    }
  }

  render() {
    const { filteredPokemons, pokemonIndex, filters, filterIndex } = this.state;

    return (
      <div className="pokedex">
        {
          (pokemonIndex < filteredPokemons.length)
            ? <Pokemon pokemon={filteredPokemons[pokemonIndex]} />
            : <></>
        }
        <div className="filter" onClick={this.handleFilter}>
          {filters.map((filter) => {
            const className = (filters[filterIndex] === filter)
              ? "Button-orange selected"
              : "Button-orange";
            return <Button key={filter} value={filter} className={className} />;
          })}
        </div>
        <div onClick={this.handleNextPokemon}>
          {
            (filteredPokemons.length === 1)
              ? <Button value="Próximo" className="Button-green" disabled={true} />
              : <Button value="Próximo" className="Button-green" />
          }
        </div>
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
