import React from "react";

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

function ListContent({ value }) {
  return (
    <li>
      <div>O conteúdo é: {value.conteudo}</div>
      <div>Status: {value.status}</div>
      <div>Bloco: {value.bloco}</div>
    </li>
  );
}

class Content extends React.Component {
  render() {
    return (
      <ul>
        {conteudos.map((content, index) => <ListContent value={content} key={index} />)}
      </ul>
    );
  }
}

export default Content;
