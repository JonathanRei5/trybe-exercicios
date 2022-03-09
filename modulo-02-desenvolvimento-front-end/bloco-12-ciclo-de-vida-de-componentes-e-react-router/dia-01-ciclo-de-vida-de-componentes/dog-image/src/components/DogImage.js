import React from 'react';
import './css/DogImage.css';

class DogImage extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      imageSRC: '',
      dogName: '',
      dogs: [],
    };

    this.getDogImage = this.getDogImage.bind(this);
    this.saveDog = this.saveDog.bind(this);
    this.handleField = this.handleField.bind(this);
    this.getDogsImagesFromLocalStorage = this.getDogsImagesFromLocalStorage.bind(this);
  }

  componentDidMount() {
    if (!this.getDogsImagesFromLocalStorage()) {
      this.getDogImage();
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.imageSRC.includes('terrier')) return false;
    return true;
  }

  componentDidUpdate(_prevProps, prevState) {
    const {
      imageSRC: prevImageSRC,
      dogs: prevDogs,
    } = prevState;
    const {
      imageSRC: currentImageSRC,
      dogs: currentDogs,
    } = this.state;

    if (prevImageSRC !== currentImageSRC) {
      const dogBreed = currentImageSRC
        .replace(/(^https:\/\/images\.dog\.ceo\/breeds\/)|(\/.*$)/g, '');
      // eslint-disable-next-line no-alert
      alert(dogBreed);
    }

    if (prevDogs.length !== currentDogs.length) {
      localStorage.setItem('DogsImages', JSON.stringify(currentDogs));
    }
  }

  handleField({ target }) {
    const { value } = target;
    this.setState({ dogName: value });
  }

  getDogImage() {
    this.setState({ isLoading: true, dogName: '' }, () => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            isLoading: false,
            imageSRC: data.message,
          });
        });
    });
  }

  getDogsImagesFromLocalStorage() {
    const dogsImages = JSON.parse(localStorage.getItem('DogsImages'));
    if (Array.isArray(dogsImages) && dogsImages.length > 0) {
      const lastIndex = dogsImages.length - 1;
      this.setState({
        isLoading: false,
        imageSRC: dogsImages[lastIndex].image,
        dogs: dogsImages });
      return true;
    }
    return false;
  }

  saveDog() {
    const { dogs, dogName, imageSRC } = this.state;
    if (dogs.some((dog) => dog.name === dogName || dog.image === imageSRC)) {
      // eslint-disable-next-line no-alert
      alert('Nome e/ou imagem já estão salvos no armazenamento local');
      return;
    }
    if (dogName.length === 0) {
      // eslint-disable-next-line no-alert
      alert('Dê um nome para o cachorro');
      return;
    }
    this.setState({
      dogs: [...dogs, { name: dogName, image: imageSRC }],
    });
  }

  render() {
    const { isLoading, imageSRC, dogName } = this.state;

    const nameTheDog = (
      <div className="nameTheDog">
        <label htmlFor="dogName" className="dogName-label">
          Nome:
          <input
            type="text"
            name="dogName"
            id="dogName"
            className="dogName-input"
            value={ dogName }
            onChange={ this.handleField }
          />
        </label>
        <button
          type="button"
          className="button"
          onClick={ () => { this.saveDog(); } }
        >
          Salvar
        </button>
      </div>
    );

    return (
      <div className="DogImage">
        {
          isLoading
            ? <span>Carregando...</span>
            : (
              <>
                {nameTheDog}
                <img className="image" src={ imageSRC } alt="Imagem de chachorro" />
              </>
            )
        }
        <button
          type="button"
          className="button btn-NextDog"
          onClick={ () => { this.getDogImage(); } }
        >
          Próximo
        </button>
      </div>
    );
  }
}

export default DogImage;
