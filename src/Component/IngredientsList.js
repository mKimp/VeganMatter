/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React from 'react';
import IngredientItem from './IngredientItem';

function IngredientsList({ ingredients }) {
  return (
    <div className="IngredientListContainer">
      <h2>Ingredients that you have</h2>
      <ul className="IngredientList">
        {ingredients.map((item) => (
          <IngredientItem
            id={item.id}
            currentI={item.value}
            ischecked={item.ischecked}
          />
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
