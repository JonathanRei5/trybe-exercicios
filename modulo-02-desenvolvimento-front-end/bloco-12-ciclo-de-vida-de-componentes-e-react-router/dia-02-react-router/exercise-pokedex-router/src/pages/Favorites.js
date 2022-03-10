import React from 'react';
import Pokemon from "../components/Pokemon";
import '../css/Favorites.css';
import pokemons from '../data/data';

class Favorites extends React.Component {
  renderPokemonsFavorites = () => {
    const { pokemonsFavorites } = this.props;
    return pokemons.reduce((acc, pokemon) => {
      if (pokemonsFavorites.includes(String(pokemon.id))) {
        acc.push(
          <Pokemon
            pokemon={pokemon}
            favorite
            showSummary
            showLinkMoreInfo
            linkToDetails
            key={pokemon.id} />
        )
      }
      return acc;
    }, []);
  }

  render() {
    const pokemonsFavorites = this.renderPokemonsFavorites();

    return (
      <main className="Favorites">
        <h1>Pokémons Favoritos</h1>
        {pokemonsFavorites.length > 0
          ? pokemonsFavorites
          : <p>No momento você não tem pokémons favoritos.</p>}
      </main>
    );
  }
}

export default Favorites;
