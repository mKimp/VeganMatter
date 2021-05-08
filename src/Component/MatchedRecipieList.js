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
    <div>
      <h2>Matched Recipies: {recipiesList.length} recipies.</h2>
      {recipiesList.map((item) => console.log(item))}
      <ul className="todoList">
        {recipiesList.map((item) => (
          <MatchedItem item={item} />
        ))}
      </ul>
    </div>
  );
}

export default MatchedRecipieList;
