import React, { useState } from 'react';
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

// const Calculator = () => (
//   <div className="calc-container">
//     <div className="result">0</div>
//     {calcElements.map((number) => (
//       <Items number={number} key={number} />
//     ))}
//   </div>
// );

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
