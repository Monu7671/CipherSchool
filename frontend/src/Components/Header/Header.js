import React from "react";
import "./Header.css";
import logo from "../../assets/Cipherschools_icon@2x.3b571d743ffedc84d039.png";
import { BiPencil } from "react-icons/bi";

function Header() {
  return (
    <div className="user_box">
      <div className="user-back">
        <div className="header-container">
          <div className="left-container">
            <div className="img-container">
              <div className="profile-box">
                <img src={logo} alt="" srcset="" width={70} height={70} />
              </div>
              <div className="profile-pencil">
                <BiPencil className="pencil" />
              </div>
            </div>
            <div className="detail-container">
              <span>Hello,</span>
              <span style={{ fontWeight: "bold" }}>Danial Mack</span>
              <span>danimacy89@gmail.com</span>
            </div>
          </div>
          <div className="right-container">
            <span>Follower 0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
