const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./script.js');

//01
describe('Testes da função sum', () => {
  it('Retorno de sum(4, 5) é 9', () => {    
    expect(9).toBe(sum(4, 5));
  });
  it('Retorno de sum(0, 0) é 0', () => {
    expect(0).toBe(sum(0, 0));    
  });
  it('Função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });
  it('Mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {sum(4, '5')}).toThrow(new Error('parameters must be numbers'));
  });
});

//02
describe('Testes da função myRemove', () => {
  it('myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {    
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });
  it('myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  });
  it('myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  }); 
});

//03
describe('Testes da função myFizzBuzz', () => {
  it('Chamada com um número 15 retorno esperado "fizzbuzz"', () => {    
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });
  it('Chamada com um número 9 retorno esperado "fizz"', () => {    
    expect('fizz').toBe(myFizzBuzz(9));
  });
  it('Chamada com um número 20 retorno esperado "buzz"', () => {    
    expect('buzz').toBe(myFizzBuzz(20));
  });
  it('Chamada com um número 14 retorno esperado 14', () => {    
    expect(14).toBe(myFizzBuzz(14));
  });
  it('Chamada com um número "G" retorno esperado False', () => {    
    expect(false).toBe(myFizzBuzz('G'));
  });
});

//04
describe('Testes da função encode', () => {
  it('encode é uma funções?', () => {    
    expect('function').toEqual(typeof encode);
  });
  it('Vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {    
    expect('12345').toEqual(encode('aeiou'));
  });
  it('String "ola, mundo!" e convertidos para "4l1, m5nd4!"', () => {    
    expect('4l1, m5nd4!').toEqual(encode('ola, mundo!'));
  });
  it('A string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {    
    expect(encode('Eduardo').length).toEqual(7);
  });
});

describe('Testes da função decode', () => {
  it('decode é uma funções?', () => {    
    expect('function').toEqual(typeof decode);
  });
  it('Números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {    
    expect('aeiou').toEqual(decode('12345'));
  });
  it('String "4l1, m5nd4!" e convertidos para "ola, mundo!"', () => {    
    expect('ola, mundo!').toEqual(decode('4l1, m5nd4!'));
  });
  it('A string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {    
    expect(decode('Eduardo').length).toEqual(7);
  });
});

//05
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

//06
describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});