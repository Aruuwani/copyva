import React from "react";
import "./musicvideo.css";
import MusicImg from '../../../assets/music_img.png'
import VideoImg from '../../../assets/video_img.png'

const MusisVideo = () => {

  // Render the static UI
  return (
    <div className='Music_videoUpload'>
        <div className="Uploaed_card bg_blue">
            <img src={MusicImg} alt="MusicImg" />
            <div className="Uploaded_content">
                <h5>Upload your music</h5>
                <p>Lorem ipsum dolor sit amet consectetur. </p>
                <button>Upload</button>
            </div>
        </div>

        <div className="Uploaed_card bg_lightPink">
            <img src={VideoImg} alt="VideoImg" />
            <div className="Uploaded_content">
                <h5>Upload your content</h5>
                <p>Lorem ipsum dolor sit amet consectetur. </p>
                <button>Upload</button>
            </div>
        </div>
</div>
  );
};

export default MusisVideo;
