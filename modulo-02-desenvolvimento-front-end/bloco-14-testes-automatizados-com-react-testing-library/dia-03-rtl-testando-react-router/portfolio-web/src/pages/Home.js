import React from 'react';
import profilePicture from '../image/blank-profile-picture.png';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <main className='Home'>
        <h1>Início</h1>
        <img
          className="profilePicture"
          src={profilePicture}
          alt="Foto de perfil genérica"
        />
        <h3>Descrição</h3>
        <p>Meu nome é Jonathan sou estudante de desenvolvimento web na Trybe, moro em São Paulo - SP, Brasil.</p>
      </main>
    );
  };
}

export default Home;
