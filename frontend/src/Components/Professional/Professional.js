import React from "react";
import "./Professional.css";
import { MdArrowDropDown } from "react-icons/md";

function Professional() {
  return (
    <div className="professional_container">
      <div className="mp-professional-box">
        <div class="mp-top-row">
          <div class="mp-left-header">Professional Information</div>
          <div class="mp-right-header">Edit</div>
        </div>
        <div className="mp-prof-info-box">
          <div className="mp-link">
            <div className="mp-input-link">
              <span className="mp-link-text">Graduation</span>
              <span style={{ flex: "1 1 0%" }}></span>
              <MdArrowDropDown />
            </div>
          </div>
          <div className="mp-link">
            <div className="mp-input-link">
              <span className="mp-link-text">What do you do currently ?</span>
              <span style={{ flex: "1 1 0%" }}></span>
              <MdArrowDropDown />
            </div>
          </div>
        </div>
      </div>
      <div class="mp-underline"></div>
    </div>
  );
}

export default Professional;
