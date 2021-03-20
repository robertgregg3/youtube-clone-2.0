import React from "react";
import { ThumbUp, ThumbDown } from "@material-ui/icons";
import "../../../css/Rating.css";

const Rating = ({ likes, dislikes }) => {
  const totalRating = likes + dislikes;
  const handleRating = (likes / totalRating) * 128;

  return (
    <div className="rating">
      <div className="rating__top">
        <ThumbUp />
        <p>{likes}</p>
        <ThumbDown />
        <p>{dislikes}</p>
      </div>
      <div className="rating__bottom">
        <span
          className="rating__bottom--bar rating__bottom--barTop"
          style={{ width: handleRating + "px" }}></span>
        <span className="rating__bottom--bar"></span>
      </div>
    </div>
  );
};

export default Rating;
