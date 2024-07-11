import React, { useRef, useState } from "react";
import "./purchase.css";
import nextTrack from "../../../../src/assets/nextbtn.svg";
import PreTrack from "../../../../src/assets/prebtn.svg";
import VideoIcon from "../../../../src/assets/video_icon.svg";
import HearIcon from "../../../../src/assets/heart.svg";
import QullSound from "../../../../src/assets/quill_sound.svg";
import SolarLink from "../../../../src/assets/solar_link-bold.svg";


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
                    <div className="Top_header"><h2>List of Purchases</h2>
                        <div className="iput_search">
                            <input type="text" placeholder="Search by genre, mood, artist" />
                            <span className="search_icon"><button><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button></span>
                        </div>
                    </div>
                    <table className="purchase_table">
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
            <div className="player">
                <div className="play_botto">

                    <div className="left_contentfooter">


                        <button onClick={handlePlayPause}>{isPlaying ? '' : ''}<img src={PreTrack} alt="PreTrack" /></button>
                        <audio ref={audioRef} src={purchases[currentTrack].audio}></audio>
                        <span className="play_btn"><img src={VideoIcon} alt="VideoIcon" /></span>
                        <button onClick={handleNext}><img src={nextTrack} alt="nextTrack" /></button>

                        <h3>{purchases[currentTrack].title}<span>by Lorem</span></h3>

                    </div>

                    <div className="right_footer">
                        <div className="icons_right">
                            <img src={QullSound} alt="QullSound" />
                            <img src={SolarLink} alt="SolarLink" />
                            <img src={HearIcon} alt="SolarLink" />

                        </div>
                        {/* <input type="range" min="0" max="1" step="0.01" onChange={handleVolumeChange} /> */}
                        <button className="btn_One">Download</button>
                        <button className="btn_Two">Buy license</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PurchasesList;
