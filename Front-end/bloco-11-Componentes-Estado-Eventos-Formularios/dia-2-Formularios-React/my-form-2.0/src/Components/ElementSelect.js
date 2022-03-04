import React, {Component} from "react";

const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

class ElementSelect extends Component { 
  render() { 
    const { label, name, data, onChange } = this.props;       
    return (
      <label>
        <p>{label}:</p>
        <select
          name={ name }            
          value={ data[name] }
          onChange={ onChange }
        >
          {states.map((element) => <option key={element} value={element} >{element}</option>)}
        </select>
      </label>
    )
  }
}

export default ElementSelect;