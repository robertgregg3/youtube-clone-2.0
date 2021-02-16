import React from "react";
import "../../../css/Subscription.css";

const Subscription = ({ Icon, title, broadcasting, amountOfNewVideos }) => {
  return (
    <div className="subscription">
      {<Icon />}
      <h4>{title}</h4>
      <div className="subscription__info">
        {broadcasting && <span className="subscription__live"></span>}
        <span className="subscription__newVideos">{amountOfNewVideos}</span>
      </div>
    </div>
  );
};

export default Subscription;
