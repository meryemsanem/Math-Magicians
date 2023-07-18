import React from 'react';
import Navbar from './Navbar';
import Calculator from './Calculator';

const CalculatorNew = () => (
  <div>
    <Navbar />
    <main>
      <h2 className="math">Lets Do Some Math!</h2>
      <Calculator />
    </main>
  </div>
);

export default CalculatorNew;
