import "./Password.css"
import React from "react";

function Password() {
  return (
    <div className="password-container">
      <div className="mp-security-box">
        <div class="mp-top-row">
          <div class="mp-left-header">Password &amp; Security</div>
          <div class="mp-right-header">Change</div>
        </div>
        <div class="mp-links-box">
          <div class="mp-link">
            <div class="mp-title">Password</div>
            <div class="mp-input-link">
              <input
                type="password"
                class="mp-link-text"
                placeholder="password"
                disabled=""
                value=".................."
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mp-underline"></div>
    </div>
  );
}

export default Password;
