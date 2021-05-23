/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import MatchedItem from './MatchedItem';

function MatchedRecipieList({ recipiesList }) {
  if (recipiesList.length === 0) {
    return (
      <div>
        <Button variant="primary" size="lg" block>
          {' '}
          Matched Recipies{' '}
        </Button>{' '}
        <ul className="MatchedRecipiesList pl-0" />
      </div>
    );
  }

  return (
    <div className="MatchedRecipies">
      <Button variant="primary" size="lg" block>
        {' '}
        Matched Recipies: {recipiesList.length}{' '}
      </Button>{' '}
      <ul className="MatchedRecipiesList pl-0">
        {recipiesList.map((item) => (
          <MatchedItem item={item} />
        ))}
      </ul>
    </div>
  );
}

export default MatchedRecipieList;
