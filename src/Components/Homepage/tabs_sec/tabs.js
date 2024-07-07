import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import type { ReactTabsFunctionComponent, TabProps } from "react-tabs";
import "./tabs.css";
import { useState } from "react";
import Music_img from "../../../assets/Frame 11 (1).png";
import First_tab from "../../../assets/Frame 29.png";
import Sec_tab from "../../../assets/Frame 30.png";
import Third_tab from "../../../assets/Frame 31.png";
import Fourth_tab from "../../../assets/Frame 33.png";
import Five_img from "../../../assets/Frame 34.png";
import Six_img from "../../../assets/Frame 35.png";
import Content_img from "../../../assets/Frame 11 (2).png";
import Artist_img from "../../../assets/Frame 11 (3).png";
import { useNavigate } from "react-router-dom";

const TabsSection = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();
  const handler = () => {
    navigate("/viewall");
  };
  return (
    <section className="Container tabs_section">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList classID="tab_list">
          <Tab>
            <h4>
              <img src={Music_img} alt="Music_img" />
              Music
            </h4>
          </Tab>
          <Tab>
            <h4>
              <img src={Content_img} alt="Content_img" />
              Content
            </h4>
          </Tab>
          <Tab>
            <h4>
              <img src={Artist_img} alt="Artist_img" />
              Artist
            </h4>
          </Tab>
        </TabList>
        <TabPanel>
          <div className="Tab_content">
            <div>
              <img src={First_tab} alt="" />
            </div>
            <div>
              <img src={Sec_tab} alt="" />
            </div>
            <div>
              <img src={Third_tab} alt="" />
            </div>
            <div>
              <img src={Fourth_tab} alt="" />
            </div>
            <div>
              <img src={Five_img} alt="" />
            </div>
            <div>
              <img src={Six_img} alt="" />
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="Tab_content">
            <div>
              <img src={First_tab} alt="" />
            </div>
            <div>
              <img src={Sec_tab} alt="" />
            </div>
            <div>
              <img src={Third_tab} alt="" />
            </div>
            <div>
              <img src={Fourth_tab} alt="" />
            </div>
            <div>
              <img src={Five_img} alt="" />
            </div>
            <div>
              <img src={Six_img} alt="" />
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="Tab_content">
            <div>
              <img src={First_tab} alt="" />
            </div>
            <div>
              <img src={Sec_tab} alt="" />
            </div>
            <div>
              <img src={Third_tab} alt="" />
            </div>
            <div>
              <img src={Fourth_tab} alt="" />
            </div>
            <div>
              <img src={Five_img} alt="" />
            </div>
            <div>
              <img src={Six_img} alt="" />
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <button type="otton" className="btn_one" onClick={() => handler()}>
        View all
      </button>
    </section>
  );
};

export default TabsSection;
