import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Pokemon.css';
import start from '../icon/star.png';

class Pokemon extends React.Component {
  renderLinkMoreInfo(link) {
    return (
      <span>
        <a className="more-info" href={link} target="_blank" rel="noopener noreferrer">Mais Informações</a>
      </span>
    );
  }

  renderImageWithLink(name, image, id) {
    return (
      <Link to={`/PokemonDetails/${id}`}>
        <div className="image-container">
          <img src={image} alt={`Imagem do ${name} de frente.`} />
        </div>
      </Link>
    )
  }

  renderImageWithoutLink(name, image, id) {
    return (
      <div className="image-container">
        <img src={image} alt={`Imagem do ${name} de frente.`} />
      </div>
    )
  }

  render() {
    const { showLinkMoreInfo, showSummary, linkToDetails, favorite } = this.props;
    const { id, name, type, image, moreInfo, summary } = this.props.pokemon;
    const { value: weight, measurementUnit: unit } = this.props.pokemon.averageWeight;

    return (
      <div className="pokemon">
        {favorite && <img className="favorite" src={start} alt="Estrela"/>}
        <div className="info-container">
          <span>{name}</span>
          <span>{type}</span>
          <span>Peso médio {weight} {unit}</span>
          {showSummary && <p className="summary">{summary}</p>}
          {showLinkMoreInfo && this.renderLinkMoreInfo(moreInfo)}
        </div>
        {
          linkToDetails
            ? this.renderImageWithLink(name, image, id)
            : this.renderImageWithoutLink(name, image, id)
        }
      </div>
    )
  }
}

Pokemon.defaultProps = {
  showLinkMoreInfo: false,
  showSummary: false,
  linkToDetails: false,
  favorite: false,
}

Pokemon.propTypes = {
  showLinkMoreInfo: PropTypes.bool,
  showSummary: PropTypes.bool,
  linkToDetails: PropTypes.bool,
  favorite: PropTypes.bool,
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    averageWeight: PropTypes.exact({
      value: PropTypes.string.isRequired,
      measurementUnit: PropTypes.string.isRequired
    }).isRequired
  })
}

export default Pokemon;
