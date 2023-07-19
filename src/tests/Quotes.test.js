import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

const waitForFetch = (data) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  );
};

test('shows charging status while getting data', async () => {

  waitForFetch([]);

  render(<Quotes />);

  const loadingElement = await screen.findByText(/Quote is loading/i);
  expect(loadingElement).toBeInTheDocument();
});


test('show citations and authors after getting the data', async () => {
  waitForFetch([
    {
      id: 1,
      quote: 'Cita de ejemplo',
      author: 'Autor de ejemplo',
    },
  ]);

  await act(async () => {
    render(<Quotes />);
  });

  await waitFor(() => {
    const quoteElement = screen.getByText('Cita de ejemplo');
    const authorElement = screen.getByText('Autor de ejemplo');
    expect(quoteElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
  });
});

test('matches the snapshot', () => {
  const componentTree = renderer.create(<Quotes />);
  expect(componentTree.toJSON()).toMatchSnapshot();
});


