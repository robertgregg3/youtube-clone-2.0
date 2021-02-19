import React from "react";
import "../../../css/WatchMain.css";
import Video from "./Video";
import VideoComments from "./VideoComments";
import VideoInfo from "./VideoInfo";
import VideoMeta from "./VideoMeta";

const WatchMain = () => {
  return (
    <div className="watchMain">
      <Video userId="-7fuHEEmEjs" />
      <VideoMeta />
      <VideoInfo />
      <VideoComments />
    </div>
  );
};

export default WatchMain;
