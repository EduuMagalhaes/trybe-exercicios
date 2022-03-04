import React, {Component} from "react";
import "./PersonalData.css"
import ElementImput from "./ElementImput.js";
import ElementSelect from "./ElementSelect.js";
import ElementImputRadio from "./ElementImputRadio.js";

class PersonalData extends Component {  
  render() {
    const { data, onChange } = this.props;
    return (
      <fieldset className="personal-data">
        <ElementImput label="Nome" type="text" name='name' data={data} onChange={onChange} />
        <ElementImput label="Email" type="text" name='email' data={data} onChange={onChange} />
        <ElementImput label="CPF" type="text" name='cpf' data={data} onChange={onChange} />
        <ElementImput label="Endereço" type="text" name='address' data={data} onChange={onChange} />
        <ElementImput label="Cidade" type="text" name='city' data={data} onChange={onChange} />
        <ElementSelect label="UF" name='countryState' data={data} onChange={onChange} />
        <ElementImputRadio label="Tipo" name='addressType' data={data} onChange={onChange} />
      </fieldset>
    )
  }
}

export default PersonalData;