import React from "react";
import "./header.css";
import Logo_web from "../../../src/assets/Copyva_logo.png";
const Header = () => {
  return (
    <section className="header_Sec">
      <div className="header_main">
        <div className="Web_logo">
          <img src={Logo_web} alt="main_logo" />
        </div>
        <div className="Header_btns">
          <button type="btn">Report content piracy</button>
          <button type="button" href='/login'>Login</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
