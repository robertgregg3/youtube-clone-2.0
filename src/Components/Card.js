import React from "react";
import image from "../images/yt1.jpg";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Avatar } from "@material-ui/core";
import "../css/Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__top">
          <img src={image} alt="" />
        </div>
        <div className="card__bottom">
          <div className="card__bottomLeft">
            <Avatar className="card__channelOwner" />
          </div>
          <div className="card__bottomRight">
            <h4>I went undercover in my Brothers Tournament</h4>
            <p>
              SypherPK
              <span>
                <CheckCircleIcon />
              </span>
            </p>

            <p>
              <span className="card__botomRight--views">512K Views</span>
              <span>1 year ago</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
