import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

test('renders Home page hero section', () => {
  renderWithRouter(<Home />);
  expect(screen.getByText(/Welcome to South Sudanese Student Association/i)).toBeInTheDocument();
  expect(screen.getAllByText(/African Leadership University/i)[0]).toBeInTheDocument();
});

test('renders key highlights section', () => {
  renderWithRouter(<Home />);
  expect(screen.getByText(/Key Highlights/i)).toBeInTheDocument();
  expect(screen.getByText(/Upcoming Event/i)).toBeInTheDocument();
  expect(screen.getByText(/Latest News/i)).toBeInTheDocument();
});

test('renders testimonials section', () => {
  renderWithRouter(<Home />);
  expect(screen.getByText(/What Our Members Say/i)).toBeInTheDocument();
  expect(screen.getByText(/Being part of SSSALU/i)).toBeInTheDocument();
});