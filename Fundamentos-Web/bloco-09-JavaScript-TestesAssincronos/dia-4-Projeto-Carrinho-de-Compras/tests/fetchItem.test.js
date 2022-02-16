require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Requisito 09', async () => {
    await fetchItem('MLB1615760527');
    expect(typeof fetchItem).toBe('function');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
    expect(await fetchItem('MLB1615760527')).toEqual(item);     
  }); 
  
});
