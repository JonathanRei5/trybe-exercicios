const sinon = require('sinon');
const { expect } = require('chai');
const movieService = require('../../services/movieService');
const movieModel = require('../../models/movieModel');

describe('Busca um filme por ID na camada service', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('quando o ID é invalido', async () => {
    it('retorna undefined', async () => {
      const response = await movieService.get('abc');
      expect(response).to.be.undefined;
    });
  });

  describe('quando o filme existe', async () => {
    it('retorna o filme correspondente ao ID', async () => {
      const movie = {
        id: 1,
        title: 'Exercícios 23.4',
        directedBy: 'Eu Mesmo',
        releaseYear: 2022,
      };
      sinon.stub(movieModel, 'get').resolves(movie);
      const response = await movieService.get(1);
      expect(response).to.be.a('object').equal(movie);
    });
  });

  describe('quando o filme não existe', async () => {
    it('retorna undefined', async () => {
      sinon.stub(movieModel, 'get').resolves(undefined);
      const response = await movieService.get(1);
      expect(response).to.be.undefined;
    });
  });
});
