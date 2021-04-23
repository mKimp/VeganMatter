/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React from 'react';
import IngredientItem from './IngredientItem';

function IngredientsList({ ingredients }) {
  return (
    <div>
      <ul>
        {ingredients.map((item) => (
          <IngredientItem key={Math.random() * 1000} currentI={item} />
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
