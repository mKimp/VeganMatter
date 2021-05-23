/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

function LandingPage({ setLandingPage }) {
  const goMainPage = () => {
    setLandingPage(false);
  };
  return (
    <Container className="container">
      <Row>
        <Col xl={4} lg={4} md={4} sm={5} style={{ padding: '10px' }}>
          <h2 style={{ padding: '0px 0px 25px 0px' }}>
            Cooking vegan is not hard like it seems.
          </h2>
          <h3 style={{ padding: '25px 0px 25px 0px' }}>
            Let is open the fridge and see what vegan recipies you can cook with
            them.
          </h3>
          <Button
            variant="primary"
            size="lg"
            style={{ padding: '10px' }}
            onClick={goMainPage}
          >
            {' '}
            Explore Vegan Recipies{' '}
          </Button>{' '}
        </Col>
        <Col xl={8} lg={8} md={8} sm={7}>
          <Image
            src="https://guidetovegan.com/wp-content/uploads/2018/11/going-vegan-how-to-go-vegan-scaled.jpg"
            fluid
            alt="vegan-background-image"
            style={{ padding: '10px 0px 0px 0px' }}
          />
        </Col>
      </Row>
      <Row />
    </Container>
  );
}

export default LandingPage;
