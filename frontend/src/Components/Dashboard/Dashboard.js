import React from "react";
import "./Dashboard.css";
import About from "../About/About";
import CipherMap from "../CipherMap/CipherMap";
import Web from "../Web/Web";
import Professional from "../Professional/Professional";
import Password from "../Password/Password";
function Dashboard() {
  return (
    <div className="component">
      <About />
      <CipherMap />
      <Web />
      <Professional />
      <Password />
    </div>
  );
}

export default Dashboard;
