import React, { useRef, useState } from "react";
import "./purchase.css";

const PurchasesList = ({ purchases }) => {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrentTrack((prevTrack) => (prevTrack + 1) % purchases.length);
        setIsPlaying(false);
    };

    const handleVolumeChange = (e) => {
        audioRef.current.volume = e.target.value;
    };
  return (
    <>
      {purchases.length > 0 ? (
        <div className="purchases-list">
            <h2>List of Purchases</h2>
            <div className="search-bar">
                <input type="text" placeholder="Search by genre, mood, artist" />
                <button><i className="fas fa-search"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genres</th>
                        <th>Mood</th>
                        <th>Artists</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase, index) => (
                        <tr key={index}>
                            <td>{purchase.title}</td>
                            <td>{purchase.genres}</td>
                            <td>{purchase.mood}</td>
                            <td>{purchase.artists}</td>
                            <td>{purchase.link}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="player">
                <audio ref={audioRef} src={purchases[currentTrack].audio}></audio>
                <p>{purchases[currentTrack].title}</p>
                <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                <button onClick={handleNext}>Next</button>
                <input type="range" min="0" max="1" step="0.01" onChange={handleVolumeChange} />
                <button>Download</button>
                <button>Buy license</button>
            </div>
        </div>
      ) : (
        <div className="no-purchases">
          <h2>List of Purchases</h2>
          <div className="no-purchases-content">
            <p>No purchase yet</p>
            <p>Browse through our large section of royalty-free music</p>
            <button className="explore-button">Explore more</button>
          </div>
        </div>
      )}
      <br />
    </>
  );
};

export default PurchasesList;
