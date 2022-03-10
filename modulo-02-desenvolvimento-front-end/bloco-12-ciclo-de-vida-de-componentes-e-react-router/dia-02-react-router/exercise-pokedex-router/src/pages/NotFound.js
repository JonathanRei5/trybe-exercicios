import React from 'react';
import '../css/NotFound.css';
import pikachu from '../images/Pikachu.gif';

class NotFound extends React.Component {
  render() {
    return (
      <main className="NotFound">
        <h1>Página não encontrada {'🙁'}</h1>
        <img src={pikachu} alt="Imagem do Pikachu com cara de choro" />
      </main >
    )
  }
}

export default NotFound;
