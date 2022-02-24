import React, { Component } from "react";
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import Button from './Button';
import "./Pokedex.css"

class Pokedex extends Component { 
  
  constructor (props) {
    super(props);
    this.state = {
      pokeIndex: 0,
      poke : this.props.poke,
      active: false,
    }
  }
  
  nextPokemon = (lenght) => {        
    if (this.state.pokeIndex < lenght -1) {
      this.setState((state) => ({
        pokeIndex: state.pokeIndex + 1
      }))
    } else {
      this.setState((state) => ({
        pokeIndex: 0,
      }))
    }    
  } 
  
  listPokemonsType = (event) => {
    const { poke } = this.props;
    const pokemon = poke.filter((element) => element.type === event.target.innerText);    
    this.setState((state) => ({
      pokeIndex: 0,
      poke : pokemon,         
    }))
    pokemon.length > 1
    ? this.setState((state) => ({ active: false }))
    : this.setState((state) => ({ active: true }))    
  }

  listAllPokemons = () => {      
    this.setState((state) => ({ 
      pokeIndex: 0,
      poke : this.props.poke,
      active: false,
    }));      
  }

  render () { 
    const { poke } = this.props;
    const types = poke.reduce((acc, element) => {
      if (!acc.includes(element.type)) acc.push(element.type);
      return acc;
    }, []); 

    return (
      <>
        <div className="header">
        <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Logo-Pokebola-Pok%C3%A9mon-PNG.png" alt="pokeball" width="200px"/> 
          <h1>Pokedex</h1>
        </div>          
        <div className="pokemon-div">
          <Pokemon key={ this.state.poke[this.state.pokeIndex].name} poke={ this.state.poke[this.state.pokeIndex]} />       
        </div>
        <div className="button-div">
          <Button name='All' func= { this.listAllPokemons } />
          { types.map((element) => <Button key={ element }  name={ element } func={ this.listPokemonsType } />)}
        </div>
        <div className="button-div">
          <Button name='Next >' func= { () => this.nextPokemon(this.state.poke.length) } active={this.state.active} />
        </div>
      </>
    )
  }
}

Pokedex.propTypes = {
  poke: PropTypes.arrayOf (
    PropTypes.shape ({
      name: PropTypes.string,
      type: PropTypes.string,
      image: PropTypes.string,
      averageWeight: PropTypes.shape ({
        value: PropTypes.number,
        measurementUnit: PropTypes.string,
      })
    }) 
  ) 
}

export default Pokedex;