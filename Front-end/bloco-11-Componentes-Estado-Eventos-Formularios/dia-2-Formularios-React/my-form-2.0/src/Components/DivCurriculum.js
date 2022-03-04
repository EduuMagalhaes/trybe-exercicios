import React, {Component} from "react";

class DivCurriculum extends Component {
  render() {  
    const { data } = this.props;  
    return (
      <fieldset className="div-03">
        <h2>Curriculo</h2>
        <p>Nome: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>CPF: {data.cpf}</p>
        <p>Endereço: {data.address}</p>
        <p>Cidade: {data.city}</p>
        <p>Estado: {data.countryState}</p>
        <p>Tipo: {data.addressType}</p>
        <p>Resumo do currículo : {data.resume}</p>
        <p>Cargo: {data.role}</p>
        <p>Descrição do cargo : {data.roleDescription}</p>        
      </fieldset>
    )
  }
}

export default DivCurriculum;
