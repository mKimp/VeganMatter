/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import data from './data/data.json';
import IngredientsList from './IngredientsList';

function ParentFilterData() {
  // const [initialData, setInitialData] = useState([]);
  const ingredientsRef = useRef([]);
  const [isLoaded, setLoading] = useState(false);
  useEffect(() => {
    const arrayIngredient = data.map((item) => item.obj);
    const filterIngredients = arrayIngredient .map((item) =>
    item.filter((current) => current['rb-in'])
  );
  filterIngredients.map((current) =>  {
      current.map((each) => {
        ingredientsRef.current = [...ingredientsRef.current,each['rb-in']];
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
    <div>
      <IngredientsList ingredients={ingredientsRef.current} />
    </div>
  );
}

export default ParentFilterData;
