import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import professionalFormAction from '../redux/actions/professionalFormAction';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { curriculo, cargo, descricao } = this.state;
    const { form } = this.props;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Link
          to="/formdisplay"
        >
          <Button
            label="enviar"
            onClick={ () => form(this.state) }
          />
        </Link>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  form: (state) => dispatch(professionalFormAction(state)),
});

ProfessionalForm.propTypes = {
  form: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProfessionalForm);
