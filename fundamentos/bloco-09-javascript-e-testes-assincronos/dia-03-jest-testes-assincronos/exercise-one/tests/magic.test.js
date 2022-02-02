require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');
    expect(response.name).toBe('Ancestor\'s Chosen');
  });

  it('getMagicCard deve ser uma função', () => {
    expect(typeof getMagicCard).toBe('function');
  });

  it('Deve chamar a função fetch uma vez', async () => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Deve chamar a função fetch com o endpoint correto', async () => {
    const url = 'https://api.magicthegathering.io/v1/cards/130550';
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Deve retornar o objeto correto', async () => {
    const response = await getMagicCard('130550');
    expect(response).toEqual(card);
  });

  it('Deve retornar um erro com a mensagem "Id is not found!"', async () => {
    const response = await getMagicCard('idDesconhecido');
    expect(response).toEqual(new Error('Id is not found!'));
  });
});
