import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

const Items = ({ number }) => {
  if (
    number === '\u00F7'
    || number === 'x'
    || number === '-'
    || number === '+'
    || number === '='
  ) {
    return <div className="input-button signs">{number}</div>;
  }
  if (number === '0') {
    return <div className="input-button zero">{number}</div>;
  }
  return <div className="input-button">{number}</div>;
};

Items.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Items;
