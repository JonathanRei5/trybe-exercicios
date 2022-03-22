import renderWithRouter from '../helper/renderWithRouter';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Verifica se a página sobre contem as infomações corretas', () => {
  test('Verifica se contem um texto com no mínimo 100 caracteres.', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /Sobre/i }));
    const about = screen.getByTestId('about');
    expect(about).toHaveTextContent(/.{100}/);
  });
});
