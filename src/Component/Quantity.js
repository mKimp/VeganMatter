/* eslint-disable react/prop-types */
import React from 'react';

function Quantity({ title, quantity, name }) {
  return (
    <div className="quantityItems">
      <h5>{title}</h5>
      <p>
        {quantity} {name}
      </p>
    </div>
  );
}

export default Quantity;
