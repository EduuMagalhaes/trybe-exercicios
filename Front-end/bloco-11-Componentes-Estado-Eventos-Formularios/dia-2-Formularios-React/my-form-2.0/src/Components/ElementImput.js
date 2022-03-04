import React, {Component} from "react";

class ElementImput extends Component {  
  render() { 
    const { label, type, name, data, onChange } = this.props;       
    return (
      <>
        <label>
          <p>{label}:</p>
          <input
            type={type}
            name={ name }            
            value={ data[name] }
            onChange={ onChange }
          />
        </label>
      </>
    )
  }
}

export default ElementImput;