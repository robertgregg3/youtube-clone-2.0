import React from "react";
import { Reply, PlaylistAdd, MoreHoriz } from "@material-ui/icons";
import Rating from "./Rating";
import "../../../css/VideoMeta.css";

const VideoMeta = ({ viewCount, dateCreated }) => {
  return (
    <div className="videoMeta">
      <h3>Video Title</h3>
      <div className="videoMeta__stats">
        <div className="videoMeta__stats--left">
          <span>
            Video Meta {viewCount} • {dateCreated}
          </span>
        </div>
        <div className="videoMeta__stats--right">
          <Rating likes={512} dislikes={72} />
          <Reply />
          <p>SHARE</p>
          <PlaylistAdd />
          <p>SAVE</p>
          <MoreHoriz />
        </div>
      </div>
    </div>
  );
};

export default VideoMeta;
