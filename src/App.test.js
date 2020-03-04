import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/wenas/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders another p element', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/probando/i);
  expect(linkElement).toBeInTheDocument();
});
