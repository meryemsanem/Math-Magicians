import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Items from '../components/calcItems';

test('renders the Items component', () => {
  const handleClick = jest.fn();
  const number = 8;
  
  const { asFragment } = render(
    <Items number={number} handleClick={handleClick} />
  );

  const componentTree = renderer.create(
    <Items number={number} handleClick={handleClick} />
  );
  expect(componentTree.toJSON()).toMatchSnapshot();
});
