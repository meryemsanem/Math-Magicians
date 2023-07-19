import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    pathname: '/dummy-route',
  }),
}));

describe('Home component', () => {
  test('should render the welcome message', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const welcomeMessage = screen.getByText(/Welcome to Math World!/i);
    expect(welcomeMessage).toBeInTheDocument();

    expect(welcomeMessage).toMatchSnapshot();
  });

  test('should render the paragraph text', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const paragraphText = screen.getByText(/Lorem ipsum dolor sit amet/i);
    expect(paragraphText).toBeInTheDocument();

    expect(paragraphText).toMatchSnapshot();
  });
});
