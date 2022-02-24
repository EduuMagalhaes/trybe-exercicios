import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Button.css"

class Button extends Component {
  render() {
    const { name, func, active } = this.props;
    return (
      <button className="btn" onClick={ func } disabled={active}>{ name }</button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string,
  func: PropTypes.func,
}

export default Button;
