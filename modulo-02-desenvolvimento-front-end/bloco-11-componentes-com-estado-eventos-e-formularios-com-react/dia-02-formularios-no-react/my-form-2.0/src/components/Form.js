import React from 'react';
import '../css/Form.css';
import estados from '../data/estados.js';
import fieldsValidations from '../utils/fieldsValidations';
import Cidade from './fields/Cidade.js';
import CPF from './fields/CPF.js';
import Email from './fields/Email.js';
import Endereco from './fields/Endereco.js';
import Estado from './fields/Estado.js';
import Nome from './fields/Nome.js';
import TipoResidencia from './fields/TipoResidencia.js';

class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      fields: this.fields(),
      invalidField: undefined,
    };
  }

  fields = () => ({
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
    tipoResidencia: '',
  });

  hasInvalidField = () => {
    const { fields } = this.state;
    const fieldsName = Object.keys(fields);
    for (let i = 0; i < fieldsName.length; i += 1) {
      const fieldName = fieldsName[i];
      const validate = fieldsValidations[fieldName];
      const error = typeof validate === 'function' ? validate(fields[fieldName]) : '';
      if (error) return { [fieldName]: error };
    }
    return undefined;
  }

  handleField = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { fields } = this.state;
    fields[target.name] = value;
    this.setState({ fields });
  }

  onSubmitButtonClick = (event) => {
    event.preventDefault();
    const invalidField = this.hasInvalidField();
    if (invalidField) {
      this.setState({ invalidField });
    } else {
      this.setState({ fields: this.fields(), invalidField });
    }
  }

  render() {
    let { invalidField } = this.state;
    return (
      <form className="Form">
        <fieldset>
          <legend>Dados Pessoais</legend>
          <Nome
            name="nome"
            value={this.state.fields.nome}
            onChange={this.handleField}
            error={invalidField && invalidField.nome}
          />
          <Email
            name="email"
            value={this.state.fields.email}
            onChange={this.handleField}
            error={invalidField && invalidField.email}
          />
          <CPF
            name="cpf"
            value={this.state.fields.cpf}
            onChange={this.handleField}
            error={invalidField && invalidField.cpf}
          />
          <Endereco
            name="endereco"
            value={this.state.fields.endereco}
            onChange={this.handleField}
            error={invalidField && invalidField.endereco}
          />
          <Cidade
            name="cidade"
            value={this.state.fields.cidade}
            onChange={this.handleField}
            error={invalidField && invalidField.cidade}
          />
          <Estado
            name="estado"
            value={this.state.fields.estado}
            onChange={this.handleField}
            estados={estados}
            error={invalidField && invalidField.estado}
          />
          <TipoResidencia
            name="tipoResidencia"
            value={this.state.fields.tipoResidencia}
            onChange={this.handleField}
            error={invalidField && invalidField.tipoResidencia}
          />
        </fieldset>
        <button
          type="submit"
          onClick={this.onSubmitButtonClick}>
          Enviar
        </button>
      </form>
    );
  }
}

export default Form;
