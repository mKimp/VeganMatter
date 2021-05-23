import { React, useState } from 'react';
import ParentFilterData from './ParentFilterData';
import Footer from './Footer';
import LandingPage from './LandingPage';

const { Router } = require('react-router');
const { Route } = require('react-router');
const { Switch } = require('react-router');

function ParentContainer() {
  const [isLandingPage, setLandingPage] = useState(true);

  if (isLandingPage) {
    return <LandingPage setLandingPage={setLandingPage} />;
  }
  return (
    <div>
      <ParentFilterData />
      <hr style={{ backgroundColor: 'white' }} />
      <Footer />)
    </div>
  );
}

export default ParentContainer;
/*       /*
      <ParentFilterData />
      <hr style={{ backgroundColor: 'white' }} />
      <Footer /> */
