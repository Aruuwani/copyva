import React, { useState, useEffect } from "react";
import "./header.css";
import Logo_web from "../../../src/assets/Copyva_logo.png";
import UserIcon from "../../../src/assets/user_icon.png";
import UserComponent from "../usercomponent";
import { Link ,useNavigate} from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);
      setUserProfile(storedUser);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserProfile(null);
    setIsMenuOpen(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    toggleMenu();
  };

  const loginHandler = ()=>{
    navigate('/auth')
  }
  return (
    <>
      <section className="header_Sec">
        <div className="header_main">
          <div className="Web_logo">
            <img src={Logo_web} alt="main_logo" />
          </div>
          <div className="Header_btns">
            <button type="button">Report content piracy</button>
            {isLoggedIn ? (
              <div className="profile-container" onClick={toggleMenu}>
                <img src={UserIcon} alt="user_icon" className="user-icon" />
                <div><span style={{color:'white'}}>{userProfile.fullName}</span></div>
                <span style={{color:'white'}}>View profile</span>
              </div>
            ) : (
              <button type="button" onClick={() => loginHandler()}>Login</button>
            )}
          </div>
        </div>
      </section>
      {isMenuOpen && userProfile && (
        <div className="side-menu">
          <div className="side-menu-header">
            <h2>Your profile</h2>
            <button className="close-button" onClick={toggleMenu}>X</button>
          </div>
          <div className="side-menu-content">
            <p>Hello</p>
            <h3>{userProfile.fullName}</h3>
            <ul>
              <li onClick={() => handleTabClick('purchases')}>
                <Link to='/usercomponent'>Purchases</Link>
              </li>
              <li onClick={() => handleTabClick('favourites')}>
                <Link to='/usercomponent'>Favourites</Link>
              </li>
              <li onClick={() => handleTabClick('userinfo')}>
                <Link to='/usercomponent'>User info</Link>
              </li>
            </ul>
            <button className="logout-button" onClick={handleLogout}>Log out</button>
          </div>
        </div>
      )}
      <UserComponent activeTab={activeTab} />
    </>
  );
};

export default Header;
