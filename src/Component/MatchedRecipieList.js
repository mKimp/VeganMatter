/* eslint-disable react/prop-types */
import React from 'react';
import MatchedItem from './MatchedItem';

function MatchedRecipieList({ recipiesList }) {
  if (recipiesList.length === 0) {
    return (
      <div>
        <h2>Matched Recipies: {recipiesList.length}.</h2>
      </div>
    );
  }

  return (
    <div className="MatchedRecipies">
      <h2 className="display-5">Matched Recipies: {recipiesList.length}</h2>
      <ul className="MatchedRecipiesList pl-0">
        {recipiesList.map((item) => (
          <MatchedItem item={item} />
        ))}
      </ul>
    </div>
  );
}

export default MatchedRecipieList;
