import './css/App.css';
import Pokemon from './Pokemon'
import pokemons from './data'

function App() {
  return (
    <>
      <Pokemon pokemon={pokemons[0]}/>
      <Pokemon pokemon={pokemons[1]}/>
    </>
  );
}

export default App;
