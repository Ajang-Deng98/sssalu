import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

test('renders footer with organization info', () => {
  renderWithRouter(<Footer />);
  expect(screen.getAllByText(/South Sudanese Student Association/i)[0]).toBeInTheDocument();
});

test('renders contact information', () => {
  renderWithRouter(<Footer />);
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
});

test('renders social media links', () => {
  renderWithRouter(<Footer />);
  const socialLinks = screen.getAllByRole('link');
  expect(socialLinks.length).toBeGreaterThan(0);
});

test('renders quick links', () => {
  renderWithRouter(<Footer />);
  expect(screen.getByText(/Quick Links/i)).toBeInTheDocument();
});