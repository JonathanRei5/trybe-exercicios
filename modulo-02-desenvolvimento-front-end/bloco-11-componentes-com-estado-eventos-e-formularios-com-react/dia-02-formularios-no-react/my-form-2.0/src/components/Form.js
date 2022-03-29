import React from 'react';
import '../css/Form.css';
import estados from '../data/estados.js';
import fieldsValidations from '../utils/fieldsValidations';
import Input from './fields/Input';
import InputRadio from './fields/InputRadio';
import Select from './fields/Select';
import TextArea from './fields/TextArea';

class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      invalidField: {},
      canShowCargoAlert: true,
    };
  }

  hasInvalidField = () => {
    const { fields } = this.props;
    const fieldsName = Object.keys(fields);
    for (let i = 0; i < fieldsName.length; i += 1) {
      const fieldName = fieldsName[i];
      const validate = fieldsValidations[fieldName];
      const error = typeof validate === 'function' ? validate(fields[fieldName]) : '';
      if (error) return { [fieldName]: error };
    }
    return undefined;
  }

  onSubmitButtonClick = (event) => {
    event.preventDefault();
    const { shouldShowData } = this.props;
    const invalidField = this.hasInvalidField();
    if (invalidField) {
      this.setState({ invalidField });
    } else {
      this.setState({ invalidField: {} });
      shouldShowData(true);
    }
  }

  onClearButtonClick = () => {
    const { clearFields, shouldShowData } = this.props;
    clearFields();
    shouldShowData(false);
  }

  highlightField = (field) => {
    let { invalidField } = this.state;
    if (invalidField[field]) return ' highlightField'
    return '';
  }

  render() {
    let { invalidField } = this.state;
    const { fields, handleField } = this.props;
    return (
      <form
        className="Form"
        onFocus={() => { this.setState({ invalidField: {} }) }}
      >
        <fieldset className="fieldsetUserData">
          <legend>Dados Pessoais</legend>
          <Input
            labelClass={'fieldContainer' + this.highlightField('nome')}
            label="Nome:"
            type="text"
            name="nome"
            value={fields.nome}
            maxLength="40"
            required
            onChange={(event) => {
              const { target } = event;
              target.value = target.value.toUpperCase();
              handleField(event);
            }}
            error={invalidField.nome}
          />
          <Input
            labelClass={'fieldContainer' + this.highlightField('email')}
            label="Email:"
            type="text"
            name="email"
            value={fields.email}
            maxLength="50"
            required
            onChange={handleField}
            error={invalidField.email}
          />
          <Input
            labelClass={'fieldContainer' + this.highlightField('cpf')}
            label="CPF:"
            type="text"
            name="cpf"
            value={fields.cpf}
            maxLength="11"
            required
            onChange={handleField}
            error={invalidField.cpf}
          />
          <Input
            labelClass={'fieldContainer' + this.highlightField('endereco')}
            label="Endereco:"
            type="text"
            name="endereco"
            value={fields.endereco}
            maxLength="200"
            required
            onChange={(event) => {
              const { target } = event;
              target.value = target.value.replace(/[^\w|\d|\s]/g, '');
              handleField(event);
            }}
            error={invalidField.endereco}
          />
          <Input
            labelClass={'fieldContainer' + this.highlightField('cidade')}
            label="Cidade:"
            type="text"
            name="cidade"
            value={fields.cidade}
            maxLength="28"
            required
            onChange={handleField}
            onBlur={function ({ target }) {
              if (/^\d/g.test(target.value)) {
                target.value = '';
              }
            }}
            error={invalidField.cidade}
          />
          <Select
            labelClass={'fieldContainer fieldEstado' + this.highlightField('estado')}
            options={estados}
            label="Estado:"
            name="estado"
            select={fields.estado}
            onChange={handleField}
            error={invalidField.estado}
          />
          <InputRadio
            labelClass={'fieldContainer fieldTipoResidencia' + this.highlightField('tipoResidencia')}
            inputs={[
              { label: "Casa", name: "tipoResidencia", value: "Casa" },
              { label: "Apartamento", name: "tipoResidencia", value: "Apartamento" }
            ]}
            label="Tipo de Residência:"
            select={fields.tipoResidencia}
            onChange={handleField}
            error={invalidField.tipoResidencia}
            required
          />
        </fieldset>
        <fieldset>
          <legend>Último emprego</legend>
          <TextArea
            labelClass={'fieldContainer fieldResumoCurriculo' + this.highlightField('resumoCurriculo')}
            label="Resumo do currículo:"
            name="resumoCurriculo"
            value={fields.resumoCurriculo}
            onChange={handleField}
            error={invalidField.resumoCurriculo}
            maxLength="1000"
            required
          />
          <Input
            labelClass={'fieldContainer' + this.highlightField('cargo')}
            label="Cargo:"
            type="text"
            name="cargo"
            value={fields.cargo}
            maxLength="40"
            required
            onChange={handleField}
            onMouseEnter={() => {
              const { canShowCargoAlert } = this.state;
              if (canShowCargoAlert) {
                alert('Preencha com cuidado esta informação.')
                this.setState({ canShowCargoAlert: false });
              }
            }}
            error={invalidField.cargo}
          />
          <TextArea
            labelClass={'fieldContainer fieldDescricaoCargo' + this.highlightField('descricaoCargo')}
            label="Descrição do cargo:"
            name="descricaoCargo"
            value={fields.descricaoCargo}
            maxLength="500"
            required
            onChange={handleField}
            error={invalidField.descricaoCargo}
          />
        </fieldset>
        <div className="buttons-container">
          <button
            className="button btnSubmit"
            type="submit"
            onClick={this.onSubmitButtonClick}>
            Enviar
          </button>
          <button
            className="button btnReset"
            type="reset"
            onClick={this.onClearButtonClick}>
            Limpar
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
