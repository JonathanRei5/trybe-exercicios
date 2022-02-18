import React from 'react'
import PropTypes from 'prop-types';
import '../css/Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { name, type, moreInfo, image } = this.props.pokemon;
    const { value: weight, measurementUnit: unit } = this.props.pokemon.averageWeight;

    return (
      <li className="pokemon">
        <div className="info-container">
          <span>{name}</span>
          <span>{type}</span>
          <span>Peso médio {weight} {unit}</span>
          <span>
            <a className="more-info" href={moreInfo} target="_blank" rel="noreferrer">Mais Informações</a>
          </span>
        </div>
        <div className="image-container">
          <img src={image} alt={`Imagem do ${name} de frente.`} />
        </div>
      </li>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    averageWeight: PropTypes.exact({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired
    }).isRequired
  })
}

export default Pokemon;
