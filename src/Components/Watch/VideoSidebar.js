import React, { useState } from "react";
import VideoRelated from "./WatchMain/VideoRelated";
import Switch from "@material-ui/core/Switch";
import "../../css/VideoSidebar.css";
import VideoNext from "./WatchMain/VideoNext";

const VideoSidebar = () => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__upNext">
        <h4>Up next</h4>
        <div className="videoSidebar__autoplay">
          <span>Autoplay</span>
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </div>
      <VideoNext />
      <VideoRelated />
    </div>
  );
};

export default VideoSidebar;
