import React from "react";
import "../../css/Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarRow from "./SidebarRow";
import Subscriptions from "./Subscriptions/Subscriptions";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__section">
        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={WhatshotIcon} title="Trending" />
        <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      </div>
      <div className="sidebar__section">
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow Icon={HistoryIcon} title="History" />
        <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow Icon={ThumbUpAltIcon} title="Liked Videos" />
        <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
      </div>
      <div className="sidebar__section">
        <h4>Subscriptions</h4>
        <Subscriptions />
      </div>
    </div>
  );
};

export default Sidebar;
