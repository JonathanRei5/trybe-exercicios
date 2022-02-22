import React from 'react';
import Pokedex from './components/Pokedex';
import pokemons from './data';
import './css/App.css';

function App() {
  return (
    <div className="pokedex-app">
      <h1>Pokedex</h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
