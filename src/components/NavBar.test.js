import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

test('renders the Navbar component', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  const headerText = screen.getByText(/Math Magicians/i);
  expect(headerText).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /Home/i });
  expect(homeLink).toBeInTheDocument();

  const calculatorLink = screen.getByRole('link', { name: /Calculator/i });
  expect(calculatorLink).toBeInTheDocument();

  const quoteLink = screen.getByRole('link', { name: /Quote/i });
  expect(quoteLink).toBeInTheDocument();
});
