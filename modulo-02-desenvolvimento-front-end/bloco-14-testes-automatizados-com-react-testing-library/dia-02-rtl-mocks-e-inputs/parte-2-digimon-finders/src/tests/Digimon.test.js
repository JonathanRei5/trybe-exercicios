import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from '../Digimon';
import digimons from './mocks/digimons';

describe('Teste do componente Digimon', () => {
  it(`Ao renderizar o componente Digimon o nome, level e imagem
      do Digimon deve aparecer.`, async () => {
    render(<Digimon digimon={digimons[1]} />);

    const { name, level, image } = digimons[1];

    expect(screen.getByRole('heading', { name }))
      .toBeInTheDocument();
    expect(screen.getByText(new RegExp(`level: ${level}`)))
      .toBeInTheDocument();
    const digimonImage = screen.getByRole('img', { name });
    expect(digimonImage).toHaveAttribute('src', image);
  });
});
