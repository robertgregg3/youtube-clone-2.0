import React, { useEffect, useState } from "react";
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
  const [user, setUser] = useState(null);
  useEffect(() => {
    handleClientLoad();
  }, []);

  const GoogleAuth = null;
  const SCOPE = "https://www.googleapis.com/auth/youtube.force-ssl";
  function handleClientLoad() {
    gapi.load("client:auth2", initClient);
  }

  function initClient() {
    var discoveryUrl =
      "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest";

    gapi.client
      .init({
        apiKey: "AIzaSyCEvmTugoZD_qw6cKp1YdX8FGsaIfYbhmo",
        clientId:
          "484216720544-ul3j924rcf28c2m8qieg2ft5g1jvkek8.apps.googleusercontent.com",
        discoveryDocs: [discoveryUrl],
        scope: SCOPE,
      })
      .then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();
        GoogleAuth.isSignedIn.listen(updateSigninStatus);

        const user = GoogleAuth.currentUser.get();
        setSigninStatus();
      });
  }

  const handleAuthClick = () => {
    if (GoogleAuth.isSignedIn.get()) {
      GoogleAuth.signOut();
    } else {
      GoogleAuth.signIn();
    }
  };

  const revokeAccess = () => {
    GoogleAuth.disconnect();
  };

  function setSigninStatus() {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    if (isAuthorized) {
      setUser(true);
    } else {
      setUser(false);
    }
  }

  function updateSigninStatus() {
    setSigninStatus();
  }

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
          {user ? (
            <button onClick={handleAuthClick}>Sign in</button>
          ) : (
            <button onClick={revokeAccess}>Sign out</button>
          )}
        </div>
      </div>
      <div className="header__bottom">
        <SearchFilter />
      </div>
    </div>
  );
};

export default Header;
