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

test('renders topnav middle spacer', () => {
  render(
    <Router>
      <TopNav />
    </Router>,
  );
  const hrElement = screen.getByTestId('topnav-middle-spacer');
  expect(hrElement).toBeInTheDocument();
});

test('renders resume link', () => {
  render(
    <Router>
      <TopNav />
    </Router>,
  );
  const linkElement = screen.getByText('Resume');
  expect(linkElement).toBeInTheDocument();
});

test('renders bikes link', () => {
  render(
    <Router>
      <TopNav />
    </Router>,
  );
  const linkElement = screen.getByText('Bikes');
  expect(linkElement).toBeInTheDocument();
});
