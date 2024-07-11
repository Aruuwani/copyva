import React from 'react';
import './index.css';
import Filter from './Filter';
// import Content from './content';
import TabsComponent from './TabsComponent';

const ViewAll = () => {
  return (
    <div className="container" style={{display:'flex'}}>
     
      <div className="main-content">
        <Filter />
        {/* <Content /> */}
      </div>
      <div>
      <TabsComponent />
      </div>
    </div>
  );
};

export default ViewAll;



