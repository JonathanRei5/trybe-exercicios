const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

function showDetails(error, message) {
  if (error) console.log(error.message);
  else console.log(message);
}

getPokemonDetails(({ name }) => name === 'Bulbasaur', showDetails);
getPokemonDetails(({ type }) => type === 'Fire', showDetails);
getPokemonDetails(({ ability }) => ability === 'Water Gun', showDetails);
getPokemonDetails(({ ability }) => ability === 'Dançar lambada', showDetails);

module.exports = {
  getPokemonDetails,
};
