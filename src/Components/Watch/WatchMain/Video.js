import React from "react";
import "../../../css/Video.css";

const Video = ({ userId }) => {
  const EMBED_URL = `https://www.youtube.com/embed/${userId}?autoplay=0`;

  return (
    <div className="video__container">
      <div className="video">
        <iframe
          className="video__player"
          width={560}
          height={315}
          src={EMBED_URL}
          frameBorder="0"
          allow="autoplay;
        encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Video;
