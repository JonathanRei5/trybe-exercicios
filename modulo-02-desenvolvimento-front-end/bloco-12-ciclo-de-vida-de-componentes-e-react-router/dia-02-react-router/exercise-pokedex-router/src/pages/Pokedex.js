import React from "react";
import Button from "../components/Button";
import Pokemon from "../components/Pokemon";
import "../css/Pokedex.css";
import pokemons from '../data/data';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
      filteredPokemons: pokemons,
      filters: pokemons.reduce((filter, pokemon) => {
        if (!filter.includes(pokemon.type)) {
          filter.push(pokemon.type);
        }
        return filter;
      }, ['Todos']),
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
    const { pokemonsFavorites: favorites } = this.props;
    const pokemon = filteredPokemons[pokemonIndex];
    const isFavorite = pokemon && favorites.includes(String(pokemon.id));

    return (
      <div className="pokedex">
        <h1>Pokédex</h1>
        {
          (pokemon)
          && (
            <Pokemon
              pokemon={pokemon}
              linkToDetails
              favorite={isFavorite}
            />
          )
        }
        <div className="filter" onClick={this.handleFilter}>
          {filters.map((filter) => {
            const className = (filters[filterIndex] === filter)
              ? "Button-orange selected"
              : "Button-orange";
            return <Button key={filter} value={filter} className={className} />;
          })}
        </div>
        {
          (filteredPokemons.length === 1)
            ? (
              <Button
                value="Próximo"
                className="Button-green"
                disabled={true}
              />
            )
            : (
              <Button
                value="Próximo"
                className="Button-green"
                onClick={this.handleNextPokemon}
              />
            )
        }
      </div>
    );
  }
}

export default Pokedex;
