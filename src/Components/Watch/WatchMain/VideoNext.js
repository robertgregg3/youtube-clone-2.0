import React from "react";
import "../../../css/VideoNext.css";
import Card from "../../Card";
import image from "../../../images/yt1.jpg";

const VideoNext = () => {
  return (
    <div className="videoNext">
      <Card
        imgSrc={image}
        duration={`10:20`}
        channelOwnerImgSrc=""
        title="This is the most amazing thing ever"
        channelOwner="SypherPk"
        views="200k"
        dateAdded="This week"
        src="/watch"
        horizontal
      />
    </div>
  );
};

export default VideoNext;
