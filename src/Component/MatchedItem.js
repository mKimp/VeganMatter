/* eslint-disable react/prop-types */
import React from 'react';

function MatchedItem({ item }) {
  console.log(item.id);
  return (
    <div>
      <h1>{item.id}</h1>
    </div>
  );
}

export default MatchedItem;
