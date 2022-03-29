import React from "react";
import '../css/UserData.css'

class UserData extends React.Component {
  render() {
    const { fields } = this.props;
    return (
      <div className="UserData">
        <h2>Seus Dados</h2>
        <div className="data">
          <div>
            <span>Nome:</span>{fields.nome}
          </div>
          <div>
            <span>E-mail:</span>{fields.email}
          </div>
          <div>
            <span>CPF:</span>{fields.cpf}
          </div>
          <div>
            <span>Endereço:</span>{fields.endereco}
          </div>
          <div>
            <span>Cidade:</span>{fields.cidade}
          </div>
          <div>
            <span>Estado:</span>{fields.estado}
          </div>
          <div>
            <span>Tipo de residência:</span>{fields.tipoResidencia}
          </div>
          <div>
            <span>Resumo do currículo:</span>{fields.resumoCurriculo}
          </div>
          <div>
            <span>Cargo:</span>{fields.cargo}
          </div>
          <div>
            <span>Descrição do cargo:</span>{fields.descricaoCargo}
          </div>
        </div>
      </div>
    );
  }
}

export default UserData;
