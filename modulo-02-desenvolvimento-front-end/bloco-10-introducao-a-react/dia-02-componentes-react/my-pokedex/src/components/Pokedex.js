import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";
import "../css/Pokedex.css";

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <ul className="pokedex">
        {pokemons.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
      </ul>
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
