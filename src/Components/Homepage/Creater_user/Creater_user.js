import React from 'react'
import "./Creater_user.css"
import Right_arrow from '../../../assets/right_arrow.svg'
import User_img from '../../../assets/User.svg'
import Creator_Img from '../../../assets/Creator.svg'


const Createuser = () => {
   

    return (
        <section>


<div className='Creator_user_sec'>
    <div className='Creator_sec'>
        <img src={Creator_Img} alt='Creator_Img'/>
        <div> <h4>Creator - Music/ Content</h4>
        <p>Sell the licence of your music/ content</p>
        </div>
        <img src={Right_arrow} alt='Right_arrow'/>
    </div>

    <div className='Creator_sec'>
        <img src={User_img} alt='Creator_Img'/>
        <div> <h4>User - Music/ Content</h4>
        <p>Buy the music/ content of your choice</p>
        </div>
        <img src={Right_arrow} alt='Right_arrow'/>
    </div>

</div>
     
      </section>
    );
}


export default Createuser