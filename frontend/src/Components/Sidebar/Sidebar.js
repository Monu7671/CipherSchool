import "./Sidebar.css";
import React from "react";
import { GiBookshelf, GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillCompass,
  AiFillCopyrightCircle,
  AiFillHome,
} from "react-icons/ai";
import { FaUserCheck, FaWpforms } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsDiscord, BsFlagFill } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="sidebar_container">
      <div>
        <div className="icons">
          <span className="nav-ham">
            <GiHamburgerMenu width={28} height={28} />
          </span>
          <span className=""></span>
        </div>
        <div className="d-icon-container">
          <div className="icons">
            <span>
              <AiFillHome />
            </span>
            <div className="desc">Home</div>
          </div>
          <div className="icons">
            <span>
              <GiBookshelf />
            </span>
            <div className="desc">Course</div>
          </div>
          <div className="icons">
            <span>
              <AiFillCompass />
            </span>
            <div className="desc">Trending</div>
          </div>
          <div className="icons">
            <span>
              <FaUserCheck />
            </span>
            <div className="desc">Following</div>
          </div>
          <div className="icons">
            <span>
              <MdDashboard />
            </span>
            <div className="desc">Dashboard</div>
          </div>
          <div className="icons">
            <span>
              <BsDiscord />
            </span>
            <div className="desc">Discord</div>
          </div>
          <div className="icons">
            <span>
              <AiFillCopyrightCircle />
            </span>
            <div className="desc">Creator</div>
          </div>
          <div className="icons">
            <span>
              <FaWpforms />
            </span>
            <div className="desc">feedback</div>
          </div>
          <div className="icons">
            <span>
              <BsFlagFill />
            </span>
            <div className="desc">Tour</div>
          </div>
        </div>
      </div>
      <div className="logout-container">
        <span>
          <RiLogoutCircleRLine />
        </span>
        <div className="desc">Logout</div>
      </div>
    </div>
  );
}

export default Sidebar;
