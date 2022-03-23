import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Projects from '../pages/Projects'

describe('Verifica a página Projetos', () => {
  test('Verifica se contem um link para o GitHub.', () => {
    render(<Projects />);
    const gitHubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(gitHubLink).toHaveAttribute('href', 'https://github.com/JonathanRei5');
    expect(gitHubLink).toHaveAttribute('target', '_blanck');
    userEvent.click(gitHubLink);
  });
});
