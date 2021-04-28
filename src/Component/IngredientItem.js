import React, { useState, useEffect } from 'react';
import { FormCheck } from 'react-bootstrap';
// eslint-disable-next-line react/prop-types
function IngredientItem({ id, currentI, ischecked }) {
  const handleChange = (e) => {
    if (e.target.checked) {
      console.log(e.target.value);
    }
  };

  return (
    <>
      <li className="ingredient-item" key={id}>
        <label htmlFor="item">
          <input
            type="checkbox"
            value={currentI}
            onChange={handleChange}
            checked={ischecked}
          />
          {currentI}
        </label>
      </li>
    </>
  );
}

export default IngredientItem;
