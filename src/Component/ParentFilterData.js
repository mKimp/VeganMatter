/* eslint-disable prettier/prettier */
import React, { useState, useEffect} from 'react';
import data from './data/data.json';
import IngredientsList from './IngredientsList';

function ParentFilterData() {
  const [isLoaded, setLoading] = useState(false);
  const [checkboxState, setCheckBoxState] = useState([]);
  // filter the data from the database
  useEffect(() => {
    console.log("renderring ")
    const arrayIngredient = data.map((item) => item.obj);
    const filterIngredients = arrayIngredient .map((item) =>
    item.filter((current) => current['rb-in'])
  );
  // eslint-disable-next-line prefer-const
  let set = new Set();
  filterIngredients.map((current) =>  {
      current.map((each) => {
        // ingredientsRef.current = [...ingredientsRef.current,each['rb-in']];
        // eslint-disable-next-line prefer-const
        let obj = {
          value: each['rb-in'],
          id: Math.random() * 1000,
          isChecked: false,
        } 
        if(!set.has(obj.value)){
          set.add(obj.value);
          setCheckBoxState(preArray => [...preArray, obj]);
        }
      });
    })
    setLoading(true);
  }, []);

  if (!isLoaded) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <IngredientsList checkboxState={checkboxState} setCheckBoxState={setCheckBoxState}/>
    </div>
  );
}

export default ParentFilterData;
