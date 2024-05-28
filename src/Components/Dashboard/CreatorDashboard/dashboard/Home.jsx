import React from 'react';
import USerImg from '../../../../assets/dashboard_img.png';
import RecentUpdate from '../../Recent_Uploads/Recent';
import MusisVideo from '../../upload_music_videoCard/musicvideo';
import LiveVhart from '../../liveChart/liveChart';
// import { Line } from 'react-chartjs-2';
export default function Home() {
  // Hardcoded users data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Data',
        data: [10, 20, 15, 25, 30, 35, 40, 45, 50, 55, 60, 65],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  
  const options = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        display: false,
      },
    },
  };
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    // Add more static user data if needed
  ];

  return (

    
    <div className='home_dashboard'>
      <div>
      <div className='users_dashboard dashboard_bg'>
        <div className='Dashbaordimg_content'>
          <img src={USerImg} alt='USerImg' />
          <div>
            <h4>Welcome to Copyva </h4>
            <h4><b>Thamas varghese</b></h4>
          </div>
        </div>


        <div className='Dashbaordimg_content'>
          <div className='Music_update'>
            <h5>Music Uploaded </h5>
            <p>0</p>
          </div>

          <div className='Content_update'>
            <h5>Content Uploaded </h5>
            <p>0</p>
          </div>
        </div>


      </div>

      <MusisVideo />

      <LiveVhart />

      {/* <Line data={data} options={options} /> */}
      </div>

      <RecentUpdate />
    </div>
  );
}
