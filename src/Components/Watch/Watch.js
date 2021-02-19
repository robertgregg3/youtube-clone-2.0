import React from "react";
import "../../css/Watch.css";
import VideoSidebar from "./VideoSidebar";
import WatchMain from "./WatchMain/WatchMain";

const Watch = () => {
  return (
    <div className="watch">
      <WatchMain />
      <VideoSidebar />
    </div>
  );
};

export default Watch;
