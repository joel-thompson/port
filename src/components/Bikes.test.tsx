import React from 'react';
import { render, screen } from '@testing-library/react';
import Bikes from './Bikes';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders bikes page', () => {
  render(
    <Router>
      <Bikes />
    </Router>,
  );
  const pElement = screen.getByText('Bikes are fun');
  expect(pElement).toBeInTheDocument();
});
