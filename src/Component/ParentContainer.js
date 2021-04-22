import React, { useState, useEffect } from 'react';
import data from './data/data.json';

function ParentContainer() {
  const [initialData, setInitialData] = useState([]);
  const [ingredients, setIngredientData] = useState([]);
  useEffect(() => {
    setInitialData(data);
    const ingredient = data.map((item) => item.obj);
    setIngredientData(ingredient);
  }, []);

  return <div>{initialData.map((item) => item.id)}</div>;
}

export default ParentContainer;
