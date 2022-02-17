import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 10,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 11,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 15,
    status: 'Aprenderei'
  },
];

function ListContent({ value }) {
  return (
    <li className='content'>
      <div><span>O conteúdo é:</span> {value.conteudo}</div>
      <div><span>Status:</span> {value.status}</div>
      <div><span>Bloco:</span> {value.bloco}</div>
    </li>
  );
}

class Content extends React.Component {
  render() {
    return (
      <ul className='contents'>
        {conteudos.map((content, index) => <ListContent value={content} key={index} />)}
      </ul>
    );
  }
}

export default Content;
