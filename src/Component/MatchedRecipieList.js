/* eslint-disable react/prop-types */
import React from 'react';

function MatchedRecipieList({ recipiesList }) {
  if (recipiesList.length === 0) {
    return (
      <div>
        <h1>hey</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>
        {recipiesList.map((item) => (
          <h1>{item.id}</h1>
        ))}
      </h1>
    </div>
  );
}

export default MatchedRecipieList;
