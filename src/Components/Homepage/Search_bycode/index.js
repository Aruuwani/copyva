

import { useState } from "react";
import Music from "./music";
import Filter from "../Music_dashboard/All/Filter";



const SearchBycode = () => {


    const [activeTabsopen, setActiveTabopen] = useState('Music');
    return (
        <div>


            <div className="user-component">
                <div className="tab-content">
                    <div className="tabs">
                        <button onClick={() => setActiveTabopen("All")}> All</button>
                        <button onClick={() => setActiveTabopen("Music")}> Music</button>
                        <button onClick={() => setActiveTabopen("Content")}> Content</button>

                    </div>
                    <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
                        <div>

                            {activeTabsopen === "Music" && <Filter />}
                        </div>

                        <div>
                            {activeTabsopen === "Music" && <Music />}



                        </div>

                    </div>
                </div>
            </div>





        </div>
    );
};

export default SearchBycode;

