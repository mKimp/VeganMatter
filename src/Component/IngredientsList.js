/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
import React from 'react';
import IngredientItem from './IngredientItem';
import SearchBox from './SearchBox';

function IngredientsList({ checkboxState, setCheckBoxState }) {
  // const lower = checkboxState.map((item) => item.value.toLowerCase());

  for (let i = 0; i < checkboxState.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    checkboxState[i].value = checkboxState[i].value.toLowerCase();
  }
  checkboxState.sort((a, b) => (a.value > b.value ? 1 : -1));
  for (let i = 0; i < checkboxState.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    checkboxState[i].value =
      checkboxState[i].value.charAt(0).toUpperCase() +
      checkboxState[i].value.slice(1);
  }
  return (
    <div className="IngredientListContainer">
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
