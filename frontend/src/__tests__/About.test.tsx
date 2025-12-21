import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('renders About page hero section', () => {
  render(<About />);
  expect(screen.getAllByText(/About Us/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/Learn about our history, mission, values, and leadership/i)).toBeInTheDocument();
});

test('renders history section', () => {
  render(<About />);
  expect(screen.getByRole('heading', { name: /Our History/i })).toBeInTheDocument();
  expect(screen.getByText(/founded in 2023/i)).toBeInTheDocument();
});

test('renders mission and vision', () => {
  render(<About />);
  expect(screen.getByText(/Our Mission/i)).toBeInTheDocument();
  expect(screen.getByText(/Our Vision/i)).toBeInTheDocument();
});

test('renders core values', () => {
  render(<About />);
  expect(screen.getByText(/Our Core Values/i)).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { name: /Unity/i })[0]).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^Excellence$/i })).toBeInTheDocument();
});

test('renders leadership team', () => {
  render(<About />);
  expect(screen.getByText(/Our Leadership Team/i)).toBeInTheDocument();
  expect(screen.getByText(/Chol Daniel Deng Dau/i)).toBeInTheDocument();
});