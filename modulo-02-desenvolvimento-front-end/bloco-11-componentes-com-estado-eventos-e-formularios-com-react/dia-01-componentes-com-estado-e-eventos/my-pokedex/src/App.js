import React from 'react';
import Filter from './components/Filter';
import pokemons from './data';
import './css/App.css';

function App() {
  return (
    <div className="pokedex-app">
      <h1>Pokedex</h1>
      <Filter pokemons={pokemons} />
    </div>
  );
}

export default App;
