import renderWithRouter from '../helper/renderWithRouter';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import emailjs from '@emailjs/browser';
import Contact from '../pages/Contact';

describe('Verifica a página "Contact".', () => {
  test('Verifica se existe um link para o LinkedIn e se abre em uma nova aba.', () => {
    renderWithRouter(<Contact />);
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/jonathanrei5/');
    expect(linkedinLink).toHaveAttribute('target', '_blanck');
  });

  test('Verifica se a função "sendForm" é chamada.', () => {
    renderWithRouter(<Contact />);
    jest.spyOn(emailjs, 'sendForm');

    const btnSubmit = screen.getByRole('button', { name: /Enviar/i });
    userEvent.click(btnSubmit);
    expect(emailjs.sendForm).toHaveBeenCalled();
  });

  test(`Verifica se uma mensagem de sucesso é mostrada quando a função "sendForm"
        é executada com sucesso.`, async () => {
    renderWithRouter(<Contact />);
    jest.spyOn(emailjs, 'sendForm').mockResolvedValue(null);
    const btnSubmit = screen.getByRole('button', { name: /Enviar/i });
    userEvent.click(btnSubmit);

    expect(await screen.findByText(/Sucesso/i)).toBeInTheDocument();
  });

  test(`Verifica se uma mensagem de erro é mostrada quando a função "sendForm"
        é executada sem sucesso.`, async () => {
    renderWithRouter(<Contact />);
    jest.spyOn(emailjs, 'sendForm').mockRejectedValue(
      { text: 'ERROR' }
    );
    const btnSubmit = screen.getByRole('button', { name: /Enviar/i });
    userEvent.click(btnSubmit);

    expect(await screen.findByText(/Erro/)).toBeInTheDocument();
  });
});
