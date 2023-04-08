import React from "react";
import "./Navbar.css";
import logo from "../../assets/Cipherschools_icon@2x.3b571d743ffedc84d039.png";
import { BsBell, BsSearch, BsSliders } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="leftnav-container">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="" width="35px" height="35px" />
            <span style={{ fontWeight: "bold", margin: "0 5px" }}>
              CipherSchools
            </span>
          </div>
        </div>
        <div className="browse-container">
          <AiOutlineCompass />
          <span>Browse</span>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="rightnav-container">
        <div className="search-container">
          <BsSearch />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search and Learn"
            className="input-field"
          />
          <BsSliders />
        </div>
        <div className="notifiy-drop">
          <BsBell />
        </div>
        <div className="profile-drop">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="coin-drop">
          <img src={logo} alt="" srcset="" />
          <span>0</span>
        </div>
        <div className="toggle-container">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
