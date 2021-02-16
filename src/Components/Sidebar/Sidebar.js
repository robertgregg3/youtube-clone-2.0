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
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
import SidebarRow from "./SidebarRow";
import Subscriptions from "./Subscriptions/Subscriptions";
import Footer from "./Footer";

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
      <div className="sidebar__section">
        <h4>More from Youtube</h4>
        <SidebarRow Icon={PlayCircleFilledIcon} title="YouTube Premium" />
        <SidebarRow Icon={SportsEsportsIcon} title="Gaming" />
        <SidebarRow Icon={SignalCellularAltIcon} title="Live" />
        <SidebarRow Icon={SportsBasketballIcon} title="Sports" />
      </div>
      <div className="sidebar__section">
        <SidebarRow Icon={SettingsIcon} title="Settings" />
        <SidebarRow Icon={FlagIcon} title="Report History" />
        <SidebarRow Icon={HelpIcon} title="Help" />
        <SidebarRow Icon={FeedbackIcon} title="Send Feedback" />
      </div>
      <div className="sidebar__section">
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
