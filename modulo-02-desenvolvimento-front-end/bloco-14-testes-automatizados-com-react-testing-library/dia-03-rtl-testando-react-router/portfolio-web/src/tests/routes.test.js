import renderWithRouter from '../helper/renderWithRouter';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Verifica se as rotas estão funcionado', () => {

  test('Verifica se o clique em cada rota renderiza os textos esperados na tela.', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('heading', { name: /início/i })).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', { name: /Sobre/i });
    userEvent.click(aboutLink);
    expect(screen.getByRole('heading', { name: /Sobre/i, level: 1 })).toBeInTheDocument();

    const projectsLink = screen.getByRole('link', { name: /Projetos/i });
    userEvent.click(projectsLink);
    expect(screen.getByRole('heading', { name: /Projetos/i, level: 1 })).toBeInTheDocument();

    const contactLink = screen.getByRole('link', { name: /Contato/i });
    userEvent.click(contactLink);
    expect(screen.getByRole('heading', { name: /Contato/i, level: 1 })).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: /Início/i });
    userEvent.click(homeLink);
    expect(screen.getByRole('heading', { name: /Início/i, level: 1 })).toBeInTheDocument();
  });

  test('Verifica no histórico se as URLs corretas são acessadas após cada clique no link.', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.click(screen.getByRole('link', { name: /Sobre/i }));
    expect(history.location.pathname).toBe('/about');

    userEvent.click(screen.getByRole('link', { name: /Projetos/i }));
    expect(history.location.pathname).toBe('/projects');

    userEvent.click(screen.getByRole('link', { name: /Contato/i }));
    expect(history.location.pathname).toBe('/contact');

    userEvent.click(screen.getByRole('link', { name: /Início/i }));
    expect(history.location.pathname).toBe('/');
  });

  test('Verifica se clicar num componente, o texto do componente que estava renderizado some da tela.', () => {
    renderWithRouter(<App />);

    const homeHeading = screen.getByRole('heading', { name: /Início/i, level: 1 });
    expect(homeHeading).toBeInTheDocument();

    userEvent.click(screen.getByRole('link', { name: /Sobre/i }));
    expect(homeHeading).not.toBeInTheDocument();
  });
});
