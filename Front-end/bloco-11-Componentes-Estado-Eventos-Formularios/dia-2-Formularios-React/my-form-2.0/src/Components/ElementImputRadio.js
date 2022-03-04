import React, {Component} from "react";
import './ElementImputRadio.css';

const options = ['Casa','Apartamento']

class ElementImputRadio extends Component {  
  render() { 
    const { name, onChange } = this.props;       
    return (
      <label className="input-radio">  
        { options.map((element, index) => <div key={element}><input type='radio' name={name} value={element} onChange={onChange}/><p>{element}</p> </div>) }
      </label>
    )
  }
}

export default ElementImputRadio;
