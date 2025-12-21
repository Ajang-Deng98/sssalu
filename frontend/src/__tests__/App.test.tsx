import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';

test('renders App component', () => {
  render(
    <MemoryRouter>
      <div>
        <Header />
        <Footer />
      </div>
    </MemoryRouter>
  );
  expect(screen.getByAltText(/SSSALU Logo/i)).toBeInTheDocument();
});

test('navigation links are present', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getAllByText(/About/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/Events/i)).toBeInTheDocument();
  expect(screen.getByText(/News/i)).toBeInTheDocument();
});