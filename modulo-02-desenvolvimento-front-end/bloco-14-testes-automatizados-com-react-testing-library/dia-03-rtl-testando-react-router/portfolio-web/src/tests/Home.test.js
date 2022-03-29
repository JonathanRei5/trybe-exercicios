import renderWithRouter from '../helper/renderWithRouter';
import { screen } from '@testing-library/react';
import App from '../App';

describe('Verifica se a página "Home" contém as infomações corretas.', () => {
  test('Verifica se existe uma foto de perfil.', () => {
    renderWithRouter(<App />);
    const profilePicture = screen.getByRole('img', { name: /Foto de perfil/i });
    expect(profilePicture).toBeInTheDocument();
  });

  test('Verifica se existe uma descrição informando pelo menos o nome.', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('heading', { name: /Descrição/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/Jonathan/)).toBeInTheDocument();
  });
});
