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
      invalidField: undefined,
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
      shouldShowData(true);
    }
  }

  render() {
    let { invalidField } = this.state;
    const { fields, handleField } = this.props;
    return (
      <form className="Form">
        <fieldset>
          <legend>Dados Pessoais</legend>
          <Input
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
            error={invalidField && invalidField.nome}
          />
          <Input
            label="Email:"
            type="text"
            name="email"
            value={fields.email}
            maxLength="50"
            required
            onChange={handleField}
            error={invalidField && invalidField.email}
          />
          <Input
            label="CPF:"
            type="text"
            name="cpf"
            value={fields.cpf}
            maxLength="11"
            required
            onChange={handleField}
            error={invalidField && invalidField.cpf}
          />
          <Input
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
            error={invalidField && invalidField.endereco}
          />
          <Input
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
            error={invalidField && invalidField.cidade}
          />
          <Select
            options={estados}
            label="Estado:"
            name="estado"
            select={fields.estado}
            onChange={handleField}
            error={invalidField && invalidField.estado}
          />
          <InputRadio
            inputs={[
              { label: "Casa:", name: "tipoResidencia", value: "Casa" },
              { label: "Apartamento:", name: "tipoResidencia", value: "Apartamento" }
            ]}
            label="Tipo de Residência:"
            select={fields.tipoResidencia}
            onChange={handleField}
            error={invalidField && invalidField.tipoResidencia}
            required
          />
        </fieldset>
        <fieldset>
          <legend>Último emprego</legend>
          <TextArea
            label="Resumo do currículo:"
            name="resumoCurriculo"
            value={fields.resumoCurriculo}
            onChange={handleField}
            error={invalidField && invalidField.resumoCurriculo}
            maxLength="1000"
            required
          />
          <Input
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
            error={invalidField && invalidField.cargo}
          />
          <TextArea
            label="Descrição do cargo:"
            name="descricaoCargo"
            value={fields.descricaoCargo}
            maxLength="500"
            required
            onChange={handleField}
            error={invalidField && invalidField.descricaoCargo}
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
