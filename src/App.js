import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Quote from './components/Quote';
import Home from './components/Home';
import CalculatorNew from './components/CalculatorNew';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/calculator" element={<CalculatorNew />} />
    <Route path="/quote" element={<Quote />} />
  </Routes>
);

export default App;
