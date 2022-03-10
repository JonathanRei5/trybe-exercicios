import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import './css/App.css';
import About from './pages/About';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonsFavorites: [],
    }
  }

  componentDidMount() {
    this.setState({
      pokemonsFavorites: this.getPokemonsFavorites()
    });
  }

  savePokemonsFavorites = () => {
    const { pokemonsFavorites } = this.state;
    localStorage.setItem(
      "PokemonsFavorites",
      JSON.stringify(pokemonsFavorites)
    );
  }

  getPokemonsFavorites = () => {
    const pokemonsFavorites = localStorage.getItem("PokemonsFavorites");
    return pokemonsFavorites
      ? JSON.parse(pokemonsFavorites)
      : [];
  }

  handlePokemonsFavorites = (id) => {
    const { pokemonsFavorites: favorites } = this.state;
    if (favorites.includes(id)) {
      this.setState({
        pokemonsFavorites: favorites.filter(pokemonID => pokemonID !== id),
      }, this.savePokemonsFavorites);
    } else {
      this.setState({
        pokemonsFavorites: [...favorites, id],
      }, this.savePokemonsFavorites);
    }
  }

  render() {
    const { pokemonsFavorites } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Pokedex pokemonsFavorites={pokemonsFavorites} />
          </Route>
          <Route exact path="/pokemonDetails/:id" render={(props) => (
            <PokemonDetails
              {...props}
              pokemonsFavorites={pokemonsFavorites}
              handlePokemonsFavorites={this.handlePokemonsFavorites}
            />
          )} />
          <Route exact path="/about" component={About} />
          <Route exact path="/favorites">
            <Favorites pokemonsFavorites={pokemonsFavorites} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </ BrowserRouter>
    );
  }
}

export default App;
