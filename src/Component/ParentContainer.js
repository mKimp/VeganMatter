import React from 'react';
import ParentFilterData from './ParentFilterData';
import Footer from './Footer';

function ParentContainer() {
  return (
    <div>
      <ParentFilterData />
      <hr style={{ backgroundColor: 'white' }} />
      <Footer />
    </div>
  );
}

export default ParentContainer;
