import renderWithRouter from '../helper/renderWithRouter';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Verifica se a página "About" contém as infomações corretas.', () => {
  test('Verifica se contém um texto com no mínimo 100 caracteres.', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /Sobre/i }));
    const about = screen.getByTestId('about');
    expect(about).toHaveTextContent(/.{100}/);
  });
});
