import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const elements = conteudos.map((element) => {
  return <li key={element.conteudo} className="card">
    <h3>{`O conteúdo é: ${element.conteudo}`}</h3>
    <span>{`Status: ${element.status}`}</span>
    <span>{`Bloco: ${element.bloco}`}</span>
  </li>
});

class Content extends Component {
  render() {
    return (
      <ul>
        {elements}
      </ul>
    )
  }
}

export default Content;