import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

test('renders header with logo', () => {
  renderWithRouter(<Header />);
  expect(screen.getByAltText(/SSSALU Logo/i)).toBeInTheDocument();
});

test('renders navigation menu', () => {
  renderWithRouter(<Header />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getAllByText(/About/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/Events/i)).toBeInTheDocument();
  expect(screen.getByText(/News/i)).toBeInTheDocument();
  expect(screen.getByText(/Gallery/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/Membership/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});