import { render, screen } from '@testing-library/react';
import React from 'react';
import Fancy from "./Fancy";

test('deve renderizar o texto', () => {
  render(
    <Fancy texto={"fancy"} />
  )
  screen.findByText('fancy é o melhor');
});