import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      curriculo,
      cargo,
      descricao,
    } = this.props;
    console.log(nome, curriculo);
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { nome }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  nome: store.personalFormReducer.nome,
  email: store.personalFormReducer.email,
  cpf: store.personalFormReducer.cpf,
  endereco: store.personalFormReducer.endereco,
  cidade: store.personalFormReducer.cidade,
  estado: store.personalFormReducer.estado,
  curriculo: store.professionalFormReducer.curriculo,
  cargo: store.professionalFormReducer.cargo,
  descricao: store.professionalFormReducer.descricao,
});

FormDataDisplay.propTypes = {
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  curriculo: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);
