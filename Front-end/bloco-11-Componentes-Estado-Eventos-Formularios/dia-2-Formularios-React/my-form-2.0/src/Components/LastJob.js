import React, {Component} from "react";
import ElementTextarea from "./ElementTextarea";
import ElementImput from "./ElementImput";

class LastJob extends Component {
  render() {  
    const { data, onChange } = this.props;  
    return (
      <fieldset className="field-job">
        <ElementTextarea label="Resumo do currículo" type="text" name='resume' data={data} onChange={onChange} />
        <ElementTextarea label="Cargo" type="text" name='role' data={data} onChange={onChange} />
        <ElementImput label="Descrição do cargo" type="text" name='roleDescription' data={data} onChange={onChange} />
      </fieldset>
    )
  }
}

export default LastJob;