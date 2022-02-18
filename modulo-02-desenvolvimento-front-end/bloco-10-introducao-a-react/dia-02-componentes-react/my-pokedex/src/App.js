import './css/App.css';
import Pokedex from './components/Pokedex'
import pokemons from './data'

function App() {
  return (
    <div className="pokedex-app">
      <h1>Pokedex</h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
