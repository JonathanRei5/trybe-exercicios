import React from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

class Contact extends React.Component {
  constructor() {
    super()

    this.state = {
      sending: false,
      responseMessage: '',
    }

    this.refForm = React.createRef()
  }

  clearForm = () => {
    this.refForm.reset();
  }

  sendMessage = (e) => {
    e.preventDefault();

    this.setState({ sending: true, responseMessage: '' });

    emailjs.sendForm('service_teuc6sr', 'template_9bnbkep', this.refForm, 'hk905J2u45Ktw7__N')
      .then(() => {
        this.setState({ sending: false, responseMessage: 'Mensagem enviada com sucesso.' });
        this.clearForm();
      }, () => {
        this.setState({ sending: false, responseMessage: 'Erro ao enviar a mensagem.' });
        this.clearForm();
      });
  };

  renderForm = () => {
    const { sending } = this.state;
    return (
      <form ref={(element) => { this.refForm = element }} onSubmit={this.sendMessage}>
        <fieldset>
          <legend>Me envie uma mensagem</legend>
          <label htmlFor="name">
            Nome
            <input type="text" name="name" placeholder="Seu nome" id="name" required />
          </label>
          <label htmlFor="message">
            Mensagem
            <textarea name="message" placeholder="Sua mensagem" id="message" required />
          </label>
          {sending ? <p>Enviando...</p> : <input type="submit" value="Enviar" />}
        </fieldset>
      </form>
    );
  }

  render() {
    const { responseMessage } = this.state;
    return (
      <main className="Contact">
        <h1>Contato</h1>
        <a
          href="https://www.linkedin.com/in/jonathanrei5/"
          rel="noopener noreferrer"
          target="_blanck"
        >Meu LinkedIn</a>
        {this.renderForm()}
        {responseMessage && <p>{responseMessage}</p>}
      </main>
    );
  };
}

export default Contact;
