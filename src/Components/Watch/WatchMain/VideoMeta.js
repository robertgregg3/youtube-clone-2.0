import React from "react";
import { MoreHoriz } from "@material-ui/icons";
import Rating from "./Rating";
import Share from "./Share";
import "../../../css/VideoMeta.css";
import Save from "./Save";

const VideoMeta = ({ viewCount, dateCreated }) => {
  return (
    <div className="videoMeta">
      <h3>Video Title</h3>
      <div className="videoMeta__stats">
        <div className="videoMeta__stats--left">
          <span>
            Video Meta {viewCount} •{" "}
            {dateCreated ? dateCreated : "May 21, 2020"}
          </span>
        </div>
        <div className="videoMeta__stats--right">
          <Rating likes={512} dislikes={72} />
          <Share />
          <Save />
          <MoreHoriz />
        </div>
      </div>
    </div>
  );
};

export default VideoMeta;
