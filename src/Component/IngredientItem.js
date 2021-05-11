/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import React from 'react';
import { FormCheck } from 'react-bootstrap';
// eslint-disable-next-line react/prop-types
function IngredientItem({ item, checkboxState, setCheckBoxState }) {
  const handlerOnChange = (e) => {
    let newBoxList = checkboxState.map((current) => {
      if (current.id === item.id) {
        current.isChecked = !current.isChecked;
      }
      return current;
    });
    setCheckBoxState(newBoxList);
  };
  return (
    <>
      <li className="ingredient-item" key={item.id}>
        <FormCheck
          className="ml-0"
          type="checkbox"
          value={item.value}
          checked={item.isChecked}
          onChange={handlerOnChange}
          label={item.value}
        />
      </li>
    </>
  );
}

export default IngredientItem;
