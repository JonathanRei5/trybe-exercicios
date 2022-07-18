const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../../api/app');

const { User } = require('../../models');
const { User: userMock } = require('../mock/models');

const { expect } = chai;

chai.use(chaiHttp);

describe('Rota GET /api/users/:userId', () => {

  before(() => {
    sinon.stub(User, 'findByPk').callsFake(userMock.findByPk);
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

});
