import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../css/Card.css";

const Card = ({
  imgSrc,
  duration,
  channelOwnerImgSrc,
  title,
  channelOwner,
  views,
  dateAdded,
  subscribedTo,
  src,
}) => {
  return (
    <Link to={src}>
      <div className="card">
        <div className="card__container">
          <div className="card__top">
            <img src={imgSrc} alt={title} />
            <span className="card__videoDuration">{duration}</span>
          </div>
          <div className="card__bottom">
            <div className="card__bottomLeft">
              <Avatar className="card__channelOwner" src={channelOwnerImgSrc} />
            </div>
            <div className="card__bottomRight">
              <h4>{title}</h4>
              <p>
                {channelOwner}
                <span>{subscribedTo && <CheckCircleIcon />}</span>
              </p>

              <p>
                <span className="card__botomRight--views">{views} Views</span>
                <span>{dateAdded}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
