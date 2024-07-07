import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './index.css';

const TabsComponent = () => {
  return (
    <div className="tabs-container">
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Music</Tab>
          <Tab>Content</Tab>
          <Tab>Artist</Tab>
        </TabList>

        <TabPanel>
          <div>All Content</div>
        </TabPanel>
        <TabPanel>
          <div>Music Content</div>
        </TabPanel>
        <TabPanel>
          <div>Content Content</div>
        </TabPanel>
        <TabPanel>
          <div>Artist Content</div>
        </TabPanel>
      </Tabs>
      <input
        type="text"
        className="search-bar"
        placeholder="Search by genre, mood, artist"
      />
    </div>
  );
};

export default TabsComponent;
