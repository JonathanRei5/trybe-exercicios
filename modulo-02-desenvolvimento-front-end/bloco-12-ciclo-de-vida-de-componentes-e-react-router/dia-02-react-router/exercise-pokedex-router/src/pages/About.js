import React from 'react';
import '../css/About.css';
import pokedexImage from '../images/Pokedex.png';

class About extends React.Component {
  render() {
    return (
      <main className="About">
        <h1>Sobre a Pokédex</h1>
        <p>
          Pokéagenda ou Pokédex (ポケモン図鑑 Pokemon zukan; illustrated Pokémon encyclopedia) é uma enciclopédia digital criada pelo Professor Carvalho como uma ferramenta inestimável para treinadores no mundo todo. Ela fornece informações sobre todos os Pokémon do mundo que estão contidos em seu banco de dados, embora seja diferente na forma como adquire e apresenta informações nas diferentes mídias. No entanto, elas também são dadas apenas a alguns treinadores, geralmente àqueles que consideram ter potencial e habilidade excepcionais. Pokédexes regionais fornecem informações sobre Pokémon nativos de sua região específica, enquanto a National Pokédex registra informações sobre todos os Pokémon conhecidos.
        </p>
        <p>
          As entradas da Pokédex geralmente descrevem um Pokémon em apenas duas ou três frases. Elas podem fornecer informações básicas sobre o habitat ou as atividades de um Pokémon na natureza ou outras informações sobre a história ou anatomia do Pokémon. As entradas da Pokédex também incluem altura, peso, sonoridade, pegada, localização, outras formas e uma imagem do Pokémon.
        </p>
        <p>
          Às vezes, a Pokédex pode conter informações imprecisas ou míticas. Por exemplo, algumas das entradas do Tentacruel o descrevem como tendo 80 tentáculos quando apenas 14 são visíveis.
        </p>
        <img src={ pokedexImage } alt="Imagem da Pokédex" />
        <p>
          Fonte: <a href="https://tkoc.fandom.com/pt-br/wiki/Pok%C3%A9dex" target="_blank" rel="noopener noreferrer">FANDOM</a>
        </p>
      </main>
    )
  }
}

export default About;
