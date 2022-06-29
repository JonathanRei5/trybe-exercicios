const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const movieModel = require('../../models/movieModel');

describe('Busca um filme por ID na camada model', () => {
  describe('quando o filme existe', async () => {

    afterEach(async () => {
      connection.execute.restore();
    });

    it('a função connection.execute deve ser chamada com os argumentos corretos',
      async () => {
        sinon.stub(connection, 'execute').resolves([[]]);
        await movieModel.get(1);
        const query = 'SELECT * FROM movies WHERE id=?';
        expect(connection.execute.calledWithExactly(query, [1])).to.be.equal(true);
      });

    it('retorna o filme correspondente ao ID', async () => {
      const movie = {
        id: 1,
        title: 'Exercícios 23.4',
        directedBy: 'Eu Mesmo',
        releaseYear: 2022,
      };
      sinon.stub(connection, 'execute').resolves([[movie]]);
      const response = await movieModel.get(1);
      expect(response).to.be.a('object').equal(movie);
    });

  });

  describe('quando o filme não existe', async () => {

    it('retorna undefined', async () => {
      sinon.stub(connection, 'execute').resolves([[]]);
      const response = await movieModel.get(1);
      expect(response).to.be.undefined;
    });

  });
});
