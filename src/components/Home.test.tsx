import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home page', () => {
  render(<Home />);
  const pElement = screen.getByText('My Name is Joel and this is my website');
  expect(pElement).toBeInTheDocument();
});
