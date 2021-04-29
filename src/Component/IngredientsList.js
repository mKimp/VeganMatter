/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React from 'react';
import IngredientItem from './IngredientItem';

function IngredientsList({ checkboxState, setCheckBoxState }) {
  return (
    <div className="IngredientListContainer">
      <h2>Ingredients that you have</h2>
      <ul className="IngredientList">
        {checkboxState.map((item) => (
          <IngredientItem
            item={item}
            checkboxState={checkboxState}
            setCheckBoxState={setCheckBoxState}
          />
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
