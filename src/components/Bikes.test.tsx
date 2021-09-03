import React from 'react';
import { render, screen } from '@testing-library/react';
import Bikes from './Bikes';

test('renders bikes page', () => {
  render(<Bikes />);
  const pElement = screen.getByText('Bikes are fun');
  expect(pElement).toBeInTheDocument();
});
