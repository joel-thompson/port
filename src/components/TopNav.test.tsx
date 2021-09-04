import React from 'react';
import { render, screen } from '@testing-library/react';
import TopNav from './TopNav';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders home link', () => {
  render(
    <Router>
      <TopNav />
    </Router>,
  );
  const linkElement = screen.getByText('Home');
  expect(linkElement).toBeInTheDocument();
});

test('renders bike link', () => {
  render(
    <Router>
      <TopNav />
    </Router>,
  );
  const linkElement = screen.getByText('Bikes');
  expect(linkElement).toBeInTheDocument();
});
