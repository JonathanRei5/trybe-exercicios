import React from 'react'
import './css/Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const info = this.props.pokemon;
    const { value: weight, measurementUnit: unit } = info.averageWeight;

    return (
      <li className="pokemon">
        <div className="info-container">
          <span>{info.name}</span>
          <span>{info.type}</span>
          <span>Peso médio {weight} {unit}</span>
          <span><a className="more-info" href={info.moreInfo} target="_blank">Mais Informação</a></span>
        </div>
        <div className="image-container">
          <img src={info.image} alt={`Imagem do ${info.name} de frente.`} />
        </div>
      </li>
    )
  }
}

export default Pokemon;
