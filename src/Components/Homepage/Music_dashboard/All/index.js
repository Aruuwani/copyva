import React from 'react';
import './index.css';
import Filter from './Filter';
import Content from './content';
import TabsComponent from './TabsComponent';

const ViewAll = () => {
  return (
    <div className="container">
      <TabsComponent />
      <div className="main-content">
        <Filter />
        <Content />
      </div>
    </div>
  );
};

export default ViewAll;
