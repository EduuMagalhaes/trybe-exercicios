import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { poke: { name, type, image, averageWeight: { value, measurementUnit } } } = this.props;
    return (
      <div className="pokemon-card">
        <div className="pokemon-info">
          <p>Name: { name }</p>
          <p>Type: { type }</p>
          <p>Average Weight: { value }{ measurementUnit }</p>
        </div>
          <img src={ image } alt={ name }/>        
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  averageWeight: PropTypes.shape ({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
}

export default Pokemon;