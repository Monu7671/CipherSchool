import "./About.css";
import React from "react";

function About() {
  return (
    <div className="mp-about-container">
      <div className="about_container">
        <div className="header_container">
          <div className="mp-left-header">About</div>
          <div className="mp-right-header">Edit</div>
        </div>
        <div className="input_container">
          <textarea
            className="mp-about-text"
            name=""
            id=""
            rows="4"
            disabled
            placeholder="Add something about you."
          ></textarea>
        </div>
      </div>
      <div className="mp-underline">

      </div>
    </div>
  );
}

export default About;
