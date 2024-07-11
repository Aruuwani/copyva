import React from 'react';
import './contenttab.css';

const Contenttab = () => {
  const musicItems = [
    {
      title: "Lorem ipsum dolor sit",
      genre: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      category: "Music",
      liked: true,
    },
    {
      title: "Lorem ipsum dolor sit",
      genre: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      category: "content",
      liked: false,
    },
    // Add more items as needed
  ];

  return (
    <div className="music-list">
      <div className="header">
      <div>
      <button className="back-button">←</button>
      <h2>AR Rahman</h2>
      </div>
        


        <div>
        <input 
        type="text" 
        placeholder="Search by artist" 
        className="search-input"
      />
        </div>
      </div>
     
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genres</th>
            <th>Mood</th>
            <th>Category</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {musicItems.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="music-item">
                  <button className="play-button">▶</button>
                  <div>
                    <p className="music-title">{item.title}</p>
                    <p className="music-artist">by Lorem</p>
                  </div>
                </div>
              </td>
              <td>{item.genre}</td>
              <td>{item.mood}</td>
              <td>
                {item.category === "Music" ? '🎵 Music' : '📺 content'}
              </td>
              <td>
                <button className="like-button">
                  {item.liked ? '🖤' : '♡'}
                </button>
              </td>
              <td>
                <button className="buy-button">Buy licence</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contenttab;
