const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../../api/app');

const { User } = require('../../models');
const { User: userMock } = require('../mock/models');
const users = require('../mock/models/users.json');

const { expect } = chai;

chai.use(chaiHttp);

describe('Rota GET /api/users/:userId', () => {

  before(() => {
    sinon.stub(User, 'findByPk').callsFake(userMock.findByPk);
    sinon.stub(User, 'findOne').callsFake(userMock.findOne);
  });

  after(() => {
    User.findByPk.restore();
  });

  describe('Ao acessar o endpoint sem passar o token', () => {
    let response;

    before(async () => {
      response = await chai
        .request(server)
        .get('/api/users/1');
    });

    it('Deve retornar a mensagem "Token não encontrado ou informado"', () => {
      expect(response.body).to.be.an('object')
        .that.contains({ message: 'Token não encontrado ou informado' });
    });

    it('Deve retornar o código de status 400', () => {
      expect(response).to.have.status(400);
    });
  });

  describe('Ao tentar obter os dados de outro usuário', () => {
    let response;

    before(async () => {
      const { token } = await chai
        .request(server)
        .post('/api/login')
        .send({ username: 'Fulano', password: 'SenhaSeguraConfia' })
        .then(({ body }) => body);

      response = await chai
        .request(server)
        .get('/api/users/2')
        .set('authorization', token);
    });

    it('Deve retornar a mensagem "Acesso negado"', () => {
      expect(response.body).to.be.an('object')
        .that.contains({ message: 'Acesso negado' });
    });

    it('Deve retornar o código de status 401', () => {
      expect(response).to.have.status(401);
    });
  });

  describe('Ao tentar obter os dados do próprio usuário', () => {
    let response;

    before(async () => {
      const { token } = await chai
        .request(server)
        .post('/api/login')
        .send({ username: 'Fulano', password: 'SenhaSeguraConfia' })
        .then(({ body }) => body);

      response = await chai
        .request(server)
        .get('/api/users/1')
        .set('authorization', token);
    });

    it('Deve retornar os dados do usuário', () => {
      expect(response.body).to.be.an('object').eqls(users[0]);
    });

    it('Deve retornar o código de status 200', () => {
      expect(response).to.have.status(200);
    });
  });

});
