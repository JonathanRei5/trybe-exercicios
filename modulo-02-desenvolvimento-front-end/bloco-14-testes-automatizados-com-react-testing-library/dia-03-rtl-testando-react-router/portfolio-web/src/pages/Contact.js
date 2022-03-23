import React from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

class Contact extends React.Component {
  constructor() {
    super()

    this.state = {
      sending: false,
      error: undefined,
    }

    this.refForm = React.createRef()
  }

  clearForm = () => {
    this.refForm.reset();
  }

  sendMessage = (e) => {
    e.preventDefault();

    this.setState({ sending: true, error: undefined });

    emailjs.sendForm('service_teuc6sr', 'template_9bnbkep', this.refForm, 'hk905J2u45Ktw7__N')
      .then(() => {
        this.setState({ sending: false, error: '' });
        this.clearForm();
      }, (error) => {
        this.setState({ sending: false, error: error.text });
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

  renderResponseMessage = () => {
    const { error } = this.state;
    return (
      <>
        {error !== undefined && !error && <p>Mensagem enviada com sucesso.</p>}
        {
          error !== undefined
          && error
          && (
            <>
              <p>Erro ao enviar a mensagem.</p>
              <p>{error}</p>
            </>
          )
        }
      </>
    )
  }

  render() {
    console.log(global.emailjs);
    return (
      <main className="Contact">
        <h1>Contato</h1>
        <a
          href="https://www.linkedin.com/in/jonathanrei5/"
          rel="noopener noreferrer"
          target="_blanck"
        >Meu LinkedIn</a>
        {this.renderForm()}
        {this.renderResponseMessage()}
      </main>
    );
  };
}

export default Contact;
