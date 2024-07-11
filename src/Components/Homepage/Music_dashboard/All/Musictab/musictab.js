import React from "react";
import "./musictab.css";

const Musictab = () => {
  const musicItems = [
    {
      title: "Lorem ipsum dolor sit",
      genre: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artist: "Lorem ipsum do",
      liked: true,
    },
    {
      title: "Lorem ipsum dolor sit",
      genre: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artist: "Lorem ipsum do",
      liked: false,
    },
    // Add more items as needed
  ];

  return (
    <div className="music-list">
      <div className="d-flex" style={{justifyContent:"space-between"}}>
        <div>
          <h2>List of Music</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by genre, mood, artist"
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
            <th>Artist</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {musicItems.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="music-item">
                  <img
                    src="image-placeholder.jpg"
                    alt="Music"
                    className="music-image"
                  />
                  <div>
                    <p className="music-title">{item.title}</p>
                    <p className="music-artist">by Lorem</p>
                  </div>
                </div>
              </td>
              <td>{item.genre}</td>
              <td>{item.mood}</td>
              <td>{item.artist}</td>
              <td>
                <button className="like-button">
                  {item.liked ? "🖤" : "🤍"}
                </button>
              </td>
              <td>
                <button className="buy-button">Buy license</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Musictab;
