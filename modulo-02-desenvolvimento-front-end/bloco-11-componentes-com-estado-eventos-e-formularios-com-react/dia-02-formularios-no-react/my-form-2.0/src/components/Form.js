import React from 'react';
import '../css/Form.css';
import estados from '../data/estados.js';
import Nome from './fields/Nome.js';
import Email from './fields/Email.js';
import CPF from './fields/CPF.js';
import TipoResidencia from './fields/TipoResidencia.js';
import Endereco from './fields/Endereco.js';
import Cidade from './fields/Cidade.js';
import Estado from './fields/Estado.js';

class Form extends React.Component {

  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      tipoResidencia: '',
      estado: '',
      cidade: '',
      endereco: ''
    }

    this.handleField = this.handleField.bind(this);
  }

  handleField({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  render() {
    return (
      <form className="Form">
        <fieldset>
          <legend>Dados Pessoais</legend>
          <Nome
            name="nome"
            value={this.state.nome}
            onChange={this.handleField}
          />
          <Email
            name="email"
            value={this.state.email}
            onChange={this.handleField}
          />
          <CPF
            name="cpf"
            value={this.state.cpf}
            onChange={this.handleField}
          />
          <Endereco
            name="endereco"
            value={this.state.endereco}
            onChange={this.handleField}
          />
          <Cidade
            name="cidade"
            value={this.state.cidade}
            onChange={this.handleField}
          />
          <Estado
            name="estado"
            value={this.state.estado}
            onChange={this.handleField}
            estados={estados}
          />
          <TipoResidencia
            name="tipoResidencia"
            value={this.state.tipoResidencia}
            onChange={this.handleField}
          />
        </fieldset>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            this.setState({
              nome: '',
              email: '',
              cpf: '',
              tipoResidencia: '',
              estado: '',
              cidade: '',
              endereco: ''
            });
          }}>
          Enviar
        </button>
      </form>
    );
  }
}

export default Form;
