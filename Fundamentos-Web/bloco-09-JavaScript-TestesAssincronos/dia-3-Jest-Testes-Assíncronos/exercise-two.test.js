const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => favoriteCards.splice(4, favoriteCards.length - 4);

describe(' Testa a função saveFavoriteMagicCard', () => {
  afterEach(() => {
    retrievesFavoriteCards();
  });
  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards.length).toBe(5);
    expect(favoriteCards[favoriteCards.length - 1].name).toEqual('Beacon of Immortality');
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards.length).toBe(6);    
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);
    const favoriteCardsName = favoriteCards.map((element) => element.name);
    expect(favoriteCardsName).toEqual(['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']);
  });
});
