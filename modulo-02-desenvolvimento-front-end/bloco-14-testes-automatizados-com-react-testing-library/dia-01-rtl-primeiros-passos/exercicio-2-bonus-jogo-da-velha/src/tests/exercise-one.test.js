import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Configuração inicial do jogo', () => {
  test('Verificar se foi renderizada nove casas', async () => {
    render(<App />);
    const cells = await screen.findAllByTestId(/cell_[0-8]/);
    expect(cells).toHaveLength(9);
  });

  test('Começar com todos os espaços em branco.', async () => {
    render(<App />);
    const cells = await screen.findAllByTestId(/cell_[0-8]/);
    for (let index = 0; index < cells.length; index += 1) {
      expect(cells[index]).toBeEmptyDOMElement();
    }
  });

  test('Começar sem a frase \'Fim de jogo\'', () => {
    render(<App />);
    expect(screen.queryByText(/Fim de jogo/i)).not.toBeInTheDocument();
  });
});
