import React from 'react';
import Items from './calcItems';
import './Calculator.css';
import calculate from '../logic/calculate';

const calcElements = [
  'AC',
  '+/-',
  '%',
  '\u00F7',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

const Calculator = () => (
  <div className="calc-container">
    <div className="result">0</div>
    {calcElements.map((number) => (
      <Items number={number} key={number} />
    ))}
  </div>
);

export default Calculator;
