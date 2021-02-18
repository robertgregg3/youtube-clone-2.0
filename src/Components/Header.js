import React, { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { Avatar } from "@material-ui/core";
import logo from "../images/youtube-logo.svg";
import SearchFilter from "./SearchFilter";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../css/Header.css";

/* global gapi */

const Header = () => {
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

          {/* <Popup
            trigger={<button> {!user ? "Sign in" : "Sign out"}</button>}
            position="left"
            modal
            nested>
            <div className="popup__container">
              <p>
                This is a Demo app but it does use your REAL data when you sign
                in. Meaning you can like/comment on videos and see your
                subscriptions etc. The data is not stored and just kept to your
                session however Any changes you should make should be permanent
                like you are using the real Youtube. It is purely to demonstrate
                the google api and show real data rather than dummy data.{" "}
              </p>
              {!user ? (
                <button onClick={handleAuthClick}>Sign in</button>
              ) : (
                <button onClick={revokeAccess}>Sign out</button>
              )}
            </div>
          </Popup> */}
        </div>
      </div>
      <div className="header__bottom">
        <SearchFilter />
      </div>
    </div>
  );
};

export default Header;
