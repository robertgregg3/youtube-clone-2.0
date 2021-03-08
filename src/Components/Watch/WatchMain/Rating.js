import React from "react";
import { ThumbUp, ThumbDown } from "@material-ui/icons";
import "../../../css/Rating.css";

const Rating = ({ likes, dislikes }) => {
  return (
    <div className="rating">
      <ThumbUp />
      <p>{likes}</p>
      <ThumbDown />
      <p>{dislikes}</p>
    </div>
  );
};

export default Rating;
