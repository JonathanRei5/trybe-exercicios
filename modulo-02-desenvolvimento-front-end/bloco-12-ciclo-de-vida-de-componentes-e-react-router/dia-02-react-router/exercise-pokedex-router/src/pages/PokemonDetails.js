import PropTypes from 'prop-types';
import React from 'react';
import Pokemon from '../components/Pokemon';
import '../css/PokemonDetails.css';
import pokemons from '../data/data';

class PokemonDetails extends React.Component {
  renderLocations(locations) {
    return (
      <div className="locations">
        <h2>Localizações</h2>
        {
          locations.map(({ location, map }) => (
            <div className="location" key={location}>
              <p>{location}</p>
              <img src={map} alt={`Localização ${location}.`} />
            </div>
          ))
        }
      </div>
    );
  }

  renderOptionFavoritePokemon = (id, isFavorite) => {
    const { handlePokemonsFavorites } = this.props;
    return (
      <label className="favorite-pokemon" htmlFor="favorite">
        Favoritar Pokémon:
        <input
          id="favorite"
          name="favorite"
          type="checkbox"
          checked={isFavorite}
          onChange={() => { handlePokemonsFavorites(id) }}
        />
      </label>
    );
  }

  render() {
    const { id } = this.props.match.params;
    const pokemon = pokemons.find(pokemon => pokemon.id === Number(id));

    if (pokemon) {
      const { pokemonsFavorites: favorites } = this.props;
      const isFavorite = favorites.includes(id);
      const { foundAt } = pokemon;
      return (
        <main className="PokemonDetails">
          <h1>Detalhes do Pokémon</h1>
          <Pokemon pokemon={pokemon} showLinkMoreInfo showSummary favorite={isFavorite} />
          {this.renderOptionFavoritePokemon(id, isFavorite)}
          {foundAt.length && this.renderLocations(foundAt)}
        </main>
      )
    } else {
      return <p className="pokemon-not-found">Pokémon não encontrado {'🙁'}</p>;
    }
  }
}

PokemonDetails.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  )
}

export default PokemonDetails;
