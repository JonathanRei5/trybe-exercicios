import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <main className="About">
        <h1>Sobre</h1>
        <p data-testid="about">Esse portfólio foi desenvolvido para o exercício do bloco React Testing Library
          com o objetivo de testar rotas criadas usando React Router e testando com React Testing Library.</p>
      </main>
    );
  };
}

export default About;
