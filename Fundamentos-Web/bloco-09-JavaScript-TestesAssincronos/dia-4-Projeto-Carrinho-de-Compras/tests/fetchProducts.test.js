require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Requisito 08', async () => {
    await fetchProducts('computador');
    expect(typeof fetchProducts).toBe('function');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    expect(await fetchProducts('computador')).toEqual(computadorSearch);     
  });  
});
