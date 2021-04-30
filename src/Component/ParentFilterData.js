/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect} from 'react';
import data from './data/data.json';
import IngredientsList from './IngredientsList';
import MatchedRecipieList from './MatchedRecipieList';

function ParentFilterData() {
  const [isLoaded, setLoading] = useState(false);
  const [checkboxState, setCheckBoxState] = useState([]);
  const [recipiesList, setRecipiesList] = useState([]);
  const [isEmptyMatched, setMatchedList] = useState(true);
  // filter the data from the database
  useEffect(() => {
    const arrayIngredient = data.map((item) => item.obj);
    const filterIngredients = arrayIngredient .map((item) =>
    item.filter((current) => current['rb-in'])
  );

  // eslint-disable-next-line prefer-const
  let set = new Set();
  filterIngredients.map((current) =>  {
      current.map((each) => {
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

  useEffect(() =>{
    const checkedBox = checkboxState.filter((item) => (item.isChecked === true));
    const ingredientValue = checkedBox.map((item) => item.value);
    let isMatched = true;
    const arrayRecipie = data.map((item) => {
      const tempArray = item.obj;      
      tempArray.map((ingr) => {
        const temp = ingr["rb-in"];
        if(ingredientValue.includes(temp)){
          isMatched = true;
        }
        else{
          isMatched = false;
        }
      })
      if(isMatched){
        if(!recipiesList.includes(item)){
          console.log("MATCHED")
          setRecipiesList(pre => [...pre, item]);
          isMatched = !isMatched;
        }
      }
      else if (!isMatched && recipiesList.includes(item)){
          const index = recipiesList.indexOf(item) ; 
          recipiesList.splice(index, 1);
          setRecipiesList(recipiesList);
      }
    })
  }, [checkboxState])

  /* ------------------------------------------------------------ */

    useEffect(() => {
      if(recipiesList.length === 0){
        setMatchedList(true);
      }
      else{
        setMatchedList(false);
      }
    }, [recipiesList])
  

  if (!isLoaded) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  console.log(recipiesList);
  return (
    <div className="container">
      <IngredientsList checkboxState={checkboxState} setCheckBoxState={setCheckBoxState}/>
      <MatchedRecipieList recipiesList={recipiesList} isEmptyMatched={isEmptyMatched}/>
    </div>
  );
}

export default ParentFilterData;
