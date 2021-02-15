import React, { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { Avatar } from "@material-ui/core";
import logo from "../images/youtube-logo.svg";
import "../css/Header.css";
import SearchFilter from "./SearchFilter";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {}, []);

  const user = "Rob";

  return (
    <div className="header">
      <div className="header__top">
        <div className="headerLeft">
          <div className="headerLeft--leftCol">
            <MenuIcon />
          </div>
          <div className="headerLeft--rightCol">
            <Link to="/">
              <img src={logo} alt="Youtube clone logo" />
            </Link>
          </div>
        </div>
        <div className="headerCenter">
          <input type="text" placeholder="Search" />
          <SearchIcon className="headerCenter__search" />
          <MicIcon />
        </div>
        <div className="headerRight">
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsActiveIcon />
          <Avatar />
          <button>{!user ? "Login" : "Logout"}</button>
        </div>
      </div>
      <div className="header__bottom">
        <SearchFilter />
      </div>
    </div>
  );
};

export default Header;
