import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders topnav separation hr', () => {
  render(<App />);
  const hrElement = screen.getByTestId('topnav-separation');
  expect(hrElement).toBeInTheDocument();
});
