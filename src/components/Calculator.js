import React, { useState } from 'react';
import './Calculator.css';
import Items from './calcItems';
import calculate from '../logic/calculate';

const calcElements = [
  'AC',
  '+/-',
  '%',
  '÷',
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
function Calculator() {
  const [output, setOutput] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, next, operation } = output;

  const handleClick = (e) => {
    const values = e.target.textContent;
    setOutput(calculate(output, values));
  };

  return (
    <div className="calc-container">
      <div className="output">{next || total || operation || 0}</div>
      {calcElements.map((number) => (
        <Items number={number} key={number} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Calculator;
