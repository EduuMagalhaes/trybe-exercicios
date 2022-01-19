const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const products = productDetails('Alcool gel', 'Máscara');    
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    
    // Teste se o retorno da função é um array.
    expect(Array.isArray(products)).toBe(true);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(products.length).toBe(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    for (const index of products) {
      expect(typeof index).toBe('object');
    }
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Link usado como referencia -> https://www.delftstack.com/pt/howto/javascript/compare-objects-javascript/#:~:text=O%20m%C3%A9todo%20r%C3%A1pido%20e%20f%C3%A1cil,objeto%20e%20assim%20por%20diante.
    expect(JSON.stringify(products[0]) !== JSON.stringify(products[1])).toBe(true);

    // Teste se os dois productIds terminam com 123.
    for (const index of products) {
      expect(index.details.productId).toMatch('123');
    }
  });
});
