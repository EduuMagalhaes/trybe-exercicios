require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');       
    expect(response.name).toBe("Ancestor's Chosen");
  });
  it('Verifica se getMagicCard é uma função', () => {           
    expect(typeof getMagicCard).toBe('function');
  });
  it('Ao chamar a função getMagicCard com o argumento "130550", a função fetch foi chamada.', async () => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalled();    
  });
  it('Ao chamar a função getMagicCard com o argumento "130550", a função fetch foi chamada com o endpoint "https://api.magicthegathering.io/v1/cards/130550"', async () => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith('https://api.magicthegathering.io/v1/cards/130550');    
  });
  it('O objeto retornado por getMagicCard(\'130550\') deve ser igual ao objeto card', async () => {
    const response = await getMagicCard('130550');       
    expect(response).toEqual(card);
  });
  it('Ao chamar a função getMagicCard com o argumento idDesconhecido, retorna um erro com a mensagem: "Id is not found!".', async () => {
    const response = await getMagicCard('idDesconhecido');       
    expect(response).toEqual(new Error('Id is not found!'));
  });
});
