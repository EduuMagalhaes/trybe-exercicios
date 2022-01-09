import JustValidate from './node_modules/just-validate/dist/just-validate.es.js';

function createEstados(estados) {
  const estadoSelect = document.querySelector("#estado-select");
  for (let estado of estados) {
    let elementOption = document.createElement('option');
    elementOption.innerText = estado;
    elementOption.value = estado;
    estadoSelect.appendChild(elementOption);
  }
}
let picker = new Pikaday({
  field: document.getElementById('data-input'),
  format: 'D/M/YYYY',
    toString(date, format) {        
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {        
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});

window.onload = function() {
createEstados(['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']);
const validation = new JustValidate('#form');
validation
.addField('#name-input', [    
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Name is required',
    },
  ])
  .addField('#email-input', [    
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])
  .addField('#cpf-input', [    
    {
      rule: 'maxLength',
      value: 11,
    },
    {
      rule: 'required',
      errorMessage: 'CPF is required',
    },
  ])
  .addField('#endereço-input', [    
    {
      rule: 'maxLength',
      value: 200,
    },
    {
      rule: 'required',
      errorMessage: 'Endereço is required',
    },
  ])
  .addField('#cidade-input', [    
    {
      rule: 'maxLength',
      value: 28,
    },
    {
      rule: 'required',
      errorMessage: 'Cidade is required',
    },
  ])
  .addField('#estado-select', [    
    {
      rule: 'required',
      errorMessage: 'Estado is required',
    },
  ])  
  .addField('#resuno-textarea', [    
    {
      rule: 'maxLength',
      value: 1000,
    },
    {
      rule: 'required',
      errorMessage: 'Resumo is required',
    },  
  ])
  .addField('#cargo-input', [    
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Cargo is required',
    },
  ])
  .addField('#cargodesc-input', [    
    {
      rule: 'maxLength',
      value: 500,
    },
    {
      rule: 'required',
      errorMessage: 'Descrição do cargo is required',
    },
  ])
  .addField('#data-input', [
    {
      rule: 'maxLength',
      value: 10,
    },
    {
      rule: 'required',
      errorMessage: 'Data is required',
    },
  ])
  .addRequiredGroup('#radio-group')
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
  });  
}
