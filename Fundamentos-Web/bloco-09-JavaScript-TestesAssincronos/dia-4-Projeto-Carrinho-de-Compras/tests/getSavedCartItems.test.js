const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Requisito 11', () => {
    getSavedCartItems('cartItems');    
    expect(localStorage.getItem).toHaveBeenCalled();  
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  }); 
});
