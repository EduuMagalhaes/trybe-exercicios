import React, {Component} from "react";
import dataInfo from '../data.js';
import PersonalData from "./PersonalData.js";
import LastJob from "./LastJob.js";
import DivCurriculum from "./DivCurriculum.js"

class Form extends Component {
  constructor() {
    super();    
    this.state = dataInfo;
  }

 /*  validate = () => {

  } */
 
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }/* , () => this.validate() */);
  }

  onClickButtonEnviar = () => {
    this.setState({
      submitted: true,
    });
  }

  onClickButtonLimpar = () => {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',  
      submitted: false,
    });
  }
  
  render() {
    return (
      <div>
        <PersonalData data={this.state} onChange={this.handleChange} />
        <LastJob data={this.state} onChange={this.handleChange} />
        <button onClick={ this.onClickButtonEnviar }>Enviar</button>
        <button onClick={ this.onClickButtonLimpar }>Limpar</button>
        { this.state.submitted && <DivCurriculum data={this.state} />}
      </div>
    )
  }
}

export default Form;