import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import digimons from './mocks/digimons';

global.fetch = jest.fn().mockImplementation((url) => new Promise(
  (resolve) => {
    const endpoint = 'https://digimon-api.vercel.app/api/digimon/name/';
    const digimonName = url.replace(endpoint, '');
    const digimonInDatabase = digimons.find(({ name }) => name === digimonName);
    if (digimonInDatabase) {
      resolve({
        json: async () => [digimonInDatabase]
      });
    }
    resolve({
      json: async () => ({ ErrorMsg: `${digimonName} is not a Digimon in our database.` })
    })
  }
));

afterEach(() => {
  global.fetch.mockClear();
});

describe('Teste da aplicação toda', () => {
  it('Verifica se existe um campo e um botão para pesquisar um Digimon', () => {
    render(<App />);
    expect(screen.getByRole('textbox', { name: /Digimon/i }))
      .toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Pesquisar/i }))
      .toBeInTheDocument();
  });

  it(`Ao pesquisar um Digimon a função fetch deve ser chamada 1 vez
      com o endpoint correto.`, () => {
    render(<App />);

    const { name } = digimons[0];
    const endpoint = `https://digimon-api.vercel.app/api/digimon/name/${name}`;

    const textbox = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Pesquisar/i });
    userEvent.type(textbox, name);
    userEvent.click(button);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Ao pesquisar um Digimon o texto "Faça uma pesquisa" deve sumir.', async () => {
    render(<App />);

    const textbox = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Pesquisar/i });
    userEvent.type(textbox, 'Agumon');
    userEvent.click(button);

    await waitForElementToBeRemoved(() => screen.getByText('Faça uma pesquisa'));
    expect(screen.queryByText('Faça uma pesquisa')).not.toBeInTheDocument();
  });

  it(`Ao pesquisar um Digimon que não existe
      uma mensagem de erro deve ser mostrada.`, async () => {
    render(<App />);
    const search = 'Digimon não encontrado'
    const ErrorMsg = `${search} is not a Digimon in our database.`;

    const textbox = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Pesquisar/i });
    userEvent.type(textbox, search);
    userEvent.click(button);

    expect(await screen.findByRole('heading', { name: ErrorMsg }))
      .toBeInTheDocument();
  });

  it(`Ao clicar no botao pesquisar com o input vazio
      nada deve acontecer.`, () => {
    render(<App />);

    const textbox = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Pesquisar/i });
    userEvent.click(button);

    expect(textbox).toHaveValue('');
    expect(screen.getByText('Faça uma pesquisa')).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it(`Ao pesquisar um Digimon que existe
      o nome, level e imagem deve aparecer.`, async () => {
    render(<App />);

    const { name, level, image } = digimons[1];

    const textbox = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Pesquisar/i });
    userEvent.type(textbox, name);
    userEvent.click(button);

    expect(await screen.findByRole('heading', { name }))
      .toBeInTheDocument();
    expect(await screen.findByText(new RegExp(`level: ${level}`)))
      .toBeInTheDocument();
    const digimonImage = await screen.findByRole('img', { name });
    expect(digimonImage).toHaveAttribute('src', image);
  });
});
