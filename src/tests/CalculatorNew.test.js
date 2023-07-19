import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import CalculatorNew from '../components/CalculatorNew';

describe('CalculatorNew', () => {
  test('should render the navbar and calculator page correctly', () => {
    render(
      <BrowserRouter>
        <CalculatorNew />
      </BrowserRouter>,
    );
    const navbar = screen.getByText('Math Magicians');
    expect(navbar).toBeInTheDocument();
    const calculator = screen.getByRole('main');
    expect(calculator).toBeInTheDocument();
  });
});
