/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import data from './data/data.json';
import IngredientsList from './IngredientsList';
import MatchedRecipieList from './MatchedRecipieList';

function ParentFilterData() {
  const [isLoaded, setLoading] = useState(false);
  const [checkboxState, setCheckBoxState] = useState([]);
  const [recipiesList, setRecipiesList] = useState([]);
  const [searchIngre, setSearchIngre] = useState(checkboxState);
  // filter the data from the database
  useEffect(() => {
    const arrayIngredient = data.map((item) => item.obj);
    const filterIngredients = arrayIngredient .map((item) =>
      item.filter((current) => current['rb-in'])
    );

  // eslint-disable-next-line prefer-const
  let set = new Set();
  filterIngredients.map((current) => { current.map((each) => {
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

  const compare = (array1, array2) => {
    const removedDuplicate = [...new Set(array1)]; 
    for (let i = 0; i < removedDuplicate.length; i += 1) {
      // eslint-disable-next-line no-param-reassign
     removedDuplicate[i] = removedDuplicate[i].toLowerCase();
    }
    const recipieMatch = removedDuplicate.sort();

    for (let i = 0; i < recipieMatch.length; i += 1) {
      // eslint-disable-next-line no-param-reassign
      recipieMatch [i]=
      recipieMatch [i].charAt(0).toUpperCase() +
      recipieMatch [i].slice(1);
    }
    const userInput = array2.sort();
    for (let i = 0; i < array1.length; i+=1){
      if (recipieMatch[i] !== userInput[i]){
        return -1;
      }
    }
    return 1;
  }
  useEffect(() =>{
    const checkedBox = checkboxState.filter((item) => (item.isChecked === true));
    const ingredientValue = checkedBox.map((item) => item.value);
    let isMatched = 1;
    const arrayRecipie = data.map((item) => {
      const tempArray = item.obj; 
      const ingredientListToCompare =tempArray.map((ingr) => ingr["rb-in"]);
      const filterUndefined = ingredientListToCompare.filter((isUndefined) => typeof(isUndefined) !== 'undefined')

      isMatched = compare(filterUndefined , ingredientValue);
      if(isMatched === 1){
        if(!recipiesList.includes(item)){
          console.log("item not included")
          console.log(item)
          setRecipiesList(pre => [...pre, item]);
         // setDeleteMatched(recipiesList);
        }
      }
      else if (isMatched === -1 && recipiesList.includes(item)){
        const filterA = recipiesList.filter((del) => del.id !== item.id)
        // const filterA = [...new Set(recipiesList)];
        setRecipiesList(filterA);
      }
    })
  }, [checkboxState, recipiesList])

  /* ------------------------------------------------------------ */
  if (!isLoaded) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <Container fluid className="container">
      <Row>
        <Col lg={4} md={4} sm={5} className="pl-0">
          <h2 className="display-5">Ingredients</h2>
          <IngredientsList checkboxState={checkboxState} setCheckBoxState={setCheckBoxState}/>
        </Col>
        <Col lg={8} md={8} sm={7}>
          <MatchedRecipieList recipiesList={recipiesList}/>
        </Col>
      </Row>
    </Container>
     
  );
}

export default ParentFilterData;
