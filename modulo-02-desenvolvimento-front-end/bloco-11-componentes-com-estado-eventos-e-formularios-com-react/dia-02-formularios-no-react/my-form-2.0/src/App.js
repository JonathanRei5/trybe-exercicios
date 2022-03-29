import React from 'react';
import Form from './components/Form.js';
import UserData from './components/UserData.js';
import './css/App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: this.fields(),
      showData: false,
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
    resumoCurriculo: '',
    cargo: '',
    descricaoCargo: '',
  });

  clearFields = () => {
    this.setState({ fields: this.fields() });
  }

  handleField = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { fields } = this.state;
    fields[target.name] = value;
    this.setState({ fields });
  }

  shouldShowData = (should) => {
    this.setState({ showData: should });
  }

  render() {
    const { fields, showData } = this.state;
    return (
      <main className='App'>
        < Form
          fields={fields}
          handleField={this.handleField}
          clearFields={this.clearFields}
          shouldShowData={this.shouldShowData}
        />
        {showData && <UserData fields={fields} />}
      </main>
    );
  }
}

export default App;
