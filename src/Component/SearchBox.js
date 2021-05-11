import React from 'react';
import { Form, Col } from 'react-bootstrap';

function SearchBox() {
  return (
    <div>
      <Form>
        <Form.Row>
          <Col xs="auto">
            <Form.Label htmlFor="searchInput" srOnly>
              Searching a ingredient
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="searchInput"
              placeholde="Searching an ingredient..."
            />
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}

export default SearchBox;
