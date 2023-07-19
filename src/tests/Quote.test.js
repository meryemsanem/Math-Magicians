import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import QuotePage from '../components/Quote';

test('renders the QuotePage component', () => {
  render(
    <MemoryRouter>
      <QuotePage />
    </MemoryRouter>
  );

  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();

  const quotesElement = screen.getByRole('main');
  expect(quotesElement).toBeInTheDocument();

  const componentTree = renderer.create(
    <MemoryRouter>
      <QuotePage />
    </MemoryRouter>
  );
  expect(componentTree.toJSON()).toMatchSnapshot();
});
