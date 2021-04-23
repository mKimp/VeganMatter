import React from 'react';

// eslint-disable-next-line react/prop-types
function IngredientItem({ currentI }) {
  return (
    <>
      {' '}
      <li>{currentI}</li>{' '}
    </>
  );
}

export default IngredientItem;
