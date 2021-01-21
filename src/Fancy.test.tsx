import { render, screen } from '@testing-library/react';
import { Fancy } from "./index";
import React from 'react';

test('deve renderizar o texto', () => {
  render(
    <Fancy texto={"fancy"} />
  )
  screen.findByText('fancy é o melhor');
});