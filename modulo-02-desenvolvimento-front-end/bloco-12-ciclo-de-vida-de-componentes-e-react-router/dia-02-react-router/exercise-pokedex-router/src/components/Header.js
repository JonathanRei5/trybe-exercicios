import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <nav>
          <Link to="/">Pokédex</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/favorites">Favoritos</Link>
        </nav>
      </header>
    )
  }
}

export default Header;
