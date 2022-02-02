const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  favoriteCards.splice(4, favoriteCards.length);
}

describe('Testa a função saveFavoriteMagicCard', () => {
  afterEach(retrievesFavoriteCards);

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards).toHaveLength(5);

    const lastIndex = favoriteCards.length - 1;
    expect(favoriteCards[lastIndex].name).toBe('Beacon of Immortality');

    await saveFavoriteMagicCard('130554');
    expect(favoriteCards).toHaveLength(6);
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);

    const favoriteCardsNames = favoriteCards.map((card) => card.name);
    const expectNames = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    expect(favoriteCardsNames).toEqual(expectNames);
  });
});
