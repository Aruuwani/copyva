import React from 'react';
import './index.css';

const Filter = () => {
  return (
    <div className="filter">
      <h3>Filter</h3>
      <div className="filter-category">
        <h4>Genre</h4>
        {/* Add Genre Filter Options Here */}
      </div>
      <div className="filter-category">
        <h4>Mood</h4>
        {['Action', 'Adventure', 'Aerobics', 'Comedy'].map((mood, index) => (
          <div key={index}>
            <input type="checkbox" id={mood} name={mood} />
            <label htmlFor={mood}>{mood}</label>
          </div>
        ))}
      </div>
      {/* Add more filter options for Artists and Language */}
    </div>
  );
};

export default Filter;
