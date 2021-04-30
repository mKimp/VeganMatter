/* eslint-disable react/prop-types */
import React from 'react';

function MatchedRecipieList({ recipiesList, isEmptyMatched }) {
  return (
    <div>
      <h1>{recipiesList[0].id}</h1>
    </div>
  );
}

export default MatchedRecipieList;
