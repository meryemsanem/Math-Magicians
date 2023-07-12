import React from 'react';
import PropTypes from 'prop-types';
import './calcItems.css';

const Items = ({ number, handleClick }) => {
  if (
    number === '\u00F7' ||
    number === 'x' ||
    number === '-' ||
    number === '+' ||
    number === '='
  ) {
    return (
      <button type="button" className="input-btn signs" onClick={handleClick}>
        {number}
      </button>
    );
  }
  if (number === '0') {
    return (
      <button type="button" className="input-btn zero" onClick={handleClick}>
        {number}
      </button>
    );
  }
  if (number === 'AC' || number === '+/-' || number === '%') {
    return (
      <button type="button" className="input-btn top" onClick={handleClick}>
        {number}
      </button>
    );
  }
  return (
    <button type="button" className="input-btn" onClick={handleClick}>
      {number}
    </button>
  );
};

Items.propTypes = {
  number: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Items;
