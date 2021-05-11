/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, Button, Modal, Container } from 'react-bootstrap';
import Quantity from './Quantity';

function MatchedItem({ item }) {
  const quantity = item.obj;

  const filterUndefined = quantity.filter(
    (rb) => typeof rb['rb-it'] !== 'undefined'
  );
  console.log(filterUndefined);
  const titleIngredient = filterUndefined.map((i) => i['rb-it']);
  console.log(titleIngredient[1]);
  const instruction = item.ins[0];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showModal = () => {
    setShow(true);
  };
  return (
    <div>
      <li key={item.id}>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.id}</Card.Title>
            <Button variant="primary" onClick={showModal}>
              Details
            </Button>
          </Card.Body>
        </Card>
      </li>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="ingredientQuantity">
            {quantity.map((rb) => (
              <li id={Math.random() * 1000}>
                <Quantity
                  title={rb['rb-it']}
                  quantity={rb['rb-ia']}
                  name={rb['rb-in']}
                />
              </li>
            ))}
          </ul>
          <h5>Directions</h5>
          <ul>
            {instruction.map((ins) => (
              <li id={Math.random() * 1000}>{ins}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MatchedItem;
