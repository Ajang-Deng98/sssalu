import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

test('Home component renders hero text', () => {
  renderWithRouter(<Home />);
  expect(screen.getByText(/Welcome to South Sudanese Student Association/i)).toBeInTheDocument();
});

test('About component renders title', () => {
  renderWithRouter(<About />);
  expect(screen.getAllByText(/About Us/i)[0]).toBeInTheDocument();
});

test('Home component has key highlights section', () => {
  renderWithRouter(<Home />);
  expect(screen.getByText(/Key Highlights/i)).toBeInTheDocument();
});

test('About component has history section', () => {
  renderWithRouter(<About />);
  expect(screen.getByText(/founded in 2023/i)).toBeInTheDocument();
});