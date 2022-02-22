import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";
import "../css/Pokedex.css";

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0
    };

    this.handleNextPokemon = this.handleNextPokemon.bind(this);
  }

  handleNextPokemon() {
    this.setState((state, props) => {
      const { pokemons } = props;
      const nextIndex = state.pokemonIndex + 1;
      return (nextIndex < pokemons.length)
        ? { pokemonIndex: state.pokemonIndex + 1 }
        : { pokemonIndex: 0 }
    });
  }

  render() {
    const { pokemons } = this.props;
    const { pokemonIndex } = this.state;

    return (
      <>
        <div className="pokedex">
          {
            (pokemonIndex < pokemons.length)
              ? <Pokemon pokemon={pokemons[pokemonIndex]} />
              : <></>
          }
        </div>
        <button onClick={this.handleNextPokemon}>Próximo</button>
      </>
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
