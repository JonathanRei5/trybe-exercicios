import React from 'react';
import '../css/Form.css';
import estados from '../data/estados.js';
import fieldsValidations from '../utils/fieldsValidations';
import Input from './fields/Input';
import InputRadio from './fields/InputRadio';
import Select from './fields/Select';

class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      fields: this.fields(),
      invalidField: undefined,
      canShowCargoAlert: true,
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
          <Input
            label="Nome:"
            type="text"
            name="nome"
            value={this.state.fields.nome}
            maxLength="40"
            required
            onChange={(event) => {
              const { target } = event;
              target.value = target.value.toUpperCase();
              this.handleField(event);
            }}
            error={invalidField && invalidField.nome}
          />
          <Input
            label="Email:"
            type="text"
            name="email"
            value={this.state.fields.email}
            maxLength="50"
            required
            onChange={this.handleField}
            error={invalidField && invalidField.email}
          />
          <Input
            label="CPF:"
            type="text"
            name="cpf"
            value={this.state.fields.cpf}
            maxLength="11"
            required
            onChange={this.handleField}
            error={invalidField && invalidField.cpf}
          />
          <Input
            label="Endereco:"
            type="text"
            name="endereco"
            value={this.state.fields.endereco}
            maxLength="200"
            required
            onChange={(event) => {
              const { target } = event;
              target.value = target.value.replace(/[^\w|\d|\s]/g, '');
              this.handleField(event);
            }}
            error={invalidField && invalidField.endereco}
          />
          <Input
            label="Cidade:"
            type="text"
            name="cidade"
            value={this.state.fields.cidade}
            maxLength="28"
            required
            onChange={this.handleField}
            onBlur={function ({ target }) {
              if (/^\d/g.test(target.value)) {
                target.value = '';
              }
            }}
            error={invalidField && invalidField.cidade}
          />
          <Select
            options={estados}
            label="Estado:"
            name="estado"
            select={this.state.fields.estado}
            onChange={this.handleField}
            error={invalidField && invalidField.estado}
          />
          <InputRadio
            inputs={[
              { label: "Casa:", name: "tipoResidencia", value: "Casa" },
              { label: "Apartamento:", name: "tipoResidencia", value: "Apartamento" }
            ]}
            label="Tipo de Residência:"
            select={this.state.fields.tipoResidencia}
            onChange={this.handleField}
            error={invalidField && invalidField.tipoResidencia}
            required
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
