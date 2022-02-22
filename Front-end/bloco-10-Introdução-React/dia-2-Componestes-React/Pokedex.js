import React, { Component } from "react";
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render () {
    const { poke } = this.props;
    return (
      <>
        <div className="header">
        <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Logo-Pokebola-Pok%C3%A9mon-PNG.png" alt="pokeball" width="200px"/> 
          <h1>Pokedex</h1>
        </div>          
        <div className="pokemon-div">
          { poke.map((pokemon) => <Pokemon key={ pokemon.name } poke={ pokemon } />) }
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