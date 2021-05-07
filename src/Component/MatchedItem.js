/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function MatchedItem({ item }) {
  console.log(item.ins[0]['1']);
  return (
    <div>
      <li key={item.id}>
        <Card style={{ width: '25rem' }}>
          <Card.Img
            variant="top"
            src="https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg"
          />
          <Card.Body>
            <Card.Title>{item.id}</Card.Title>
            <Card.Text>jdlajd</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </li>
    </div>
  );
}

export default MatchedItem;
