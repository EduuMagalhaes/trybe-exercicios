// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8");

describe("A função getPokemonDetails", (done) => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {    
    getPokemonDetails((pokemons) => pokemons.name === 'Alakazam',
      (error, msg) => {             
        expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
        done();       
      }       
    );    
  });
  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails((pokemons) => pokemons.name === 'Charmander',
      (error, msg) => {             
        expect(msg).toEqual('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
        done();       
      }       
    ); 
  });
});



