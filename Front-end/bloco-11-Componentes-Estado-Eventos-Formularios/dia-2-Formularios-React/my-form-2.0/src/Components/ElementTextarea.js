import React, {Component} from "react";

class ElementTextarea extends Component {  
  render() { 
    const { label, type, name, data, onChange } = this.props;       
    return (
      <>
        <label>
          <p>{label}:</p>
          <textarea
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

export default ElementTextarea;