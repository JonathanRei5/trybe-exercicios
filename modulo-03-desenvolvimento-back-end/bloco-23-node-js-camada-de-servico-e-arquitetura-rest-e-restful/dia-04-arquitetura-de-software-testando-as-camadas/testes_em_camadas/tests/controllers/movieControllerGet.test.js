const sinon = require('sinon');
const { expect } = require('chai');
const movieController = require('../../controllers/movieController');
const movieService = require('../../services/movieService');

describe('Busca um filme por ID na camada controller', () => {
  const movie = {
    id: 1,
    title: 'Exercícios 23.4',
    directedBy: 'Eu Mesmo',
    releaseYear: 2022,
  };
  const req = {};
  const res = {};

  afterEach(() => {
    sinon.restore();
  });

  describe('quando o filme existe', async () => {
    it('retorna status 200 e um json com os dados do filme', async () => {

      req.params = { id: '1' };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(movieService, 'get').resolves(movie);

      await movieController.get(req, res);
      expect(res.status.calledWithExactly(200)).to.be.true;
      expect(res.json.calledWithExactly(movie)).to.be.true;
    });
  });

  describe('quando o filme não existe', async () => {
    it('retorna status 404 e a mensagem Filme não encontrado', async () => {

      req.params = { id: '1' };
      res.status = sinon.stub().returns(res);
      res.send = sinon.stub();

      sinon.stub(movieService, 'get').resolves(undefined);

      await movieController.get(req, res);
      expect(res.status.calledWithExactly(404)).to.be.true;
      expect(res.send.calledWithExactly('Filme não encontrado')).to.be.true;
    });
  });
});
