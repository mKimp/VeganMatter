/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import MatchedItem from './MatchedItem';

function MatchedRecipieList({ recipiesList }) {
  if (recipiesList.length === 0) {
    return (
      <div>
        <h1>
          There are the recipies you can make based on selected ingredients:{' '}
          {recipiesList.length} recipies.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h2>
        There are the recipies you can make based on selected ingredients:{' '}
        {recipiesList.length} recipies.
      </h2>
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
