import React from "react";
import "./Web.css";
import { RiLinkedinBoxFill } from "react-icons/ri";
import {
  BsFacebook,
  BsGithub,
  BsGlobe2,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function Web() {
  return (
    <div className="mp-web-container">
      <div className="web-container">
        <div className="web-links">
          <div class="mp-left-header">On the web</div>
          <div class="mp-right-header">Edit</div>
        </div>
        <div className="mp-links-box">
          <div className="mp-link">
            <div className="mp-title">LinkedIn</div>
            <div className="mp-input-link">
              <span className="mp-input-icon">
                <RiLinkedinBoxFill />
              </span>
              <input
                type="text"
                name=""
                id=""
                className="mp-link-text"
                disabled
                placeholder="LinkedIn"
              />
            </div>
          </div>
          <div className="mp-link">
            <div className="mp-title">Github</div>
            <div className="mp-input-link">
              <span className="mp-input-icon">
                <BsGithub />
              </span>
              <input
                type="text"
                name=""
                id=""
                className="mp-link-text"
                disabled
                placeholder="Github"
              />
            </div>
          </div>
          <div className="mp-link">
            <div className="mp-title">Facebook</div>
            <div className="mp-input-link">
              <span className="mp-input-icon">
                <BsFacebook />
              </span>
              <input
                type="text"
                name=""
                id=""
                className="mp-link-text"
                disabled
                placeholder="Facebook"
              />
            </div>
          </div>
          <div className="mp-link">
            <div className="mp-title">Twitter</div>
            <div className="mp-input-link">
              <span className="mp-input-icon">
                <BsTwitter />
              </span>
              <input
                type="text"
                name=""
                id=""
                className="mp-link-text"
                disabled
                placeholder="Twitter"
              />
            </div>
          </div>
          <div className="mp-link">
            <div className="mp-title">Instagram</div>
            <div className="mp-input-link">
              <span className="mp-input-icon">
                <BsInstagram />
              </span>
              <input
                type="text"
                name=""
                id=""
                className="mp-link-text"
                disabled
                placeholder="Instagram"
              />
            </div>
          </div>
          <div className="mp-link">
            <div className="mp-title">Website</div>
            <div className="mp-input-link">
              <span className="mp-input-icon">
                <BsGlobe2 />
              </span>
              <input
                type="text"
                name=""
                id=""
                className="mp-link-text"
                disabled
                placeholder="Your Website"
              />
            </div>
          </div>
        </div>
        <div class="mp-underline"></div>
      </div>
    </div>
  );
}

export default Web;
