import React from "react";
import "../../../css/Subscription.css";

const Subscription = ({ Icon, title }) => {
  return (
    <div className="subscription">
      {<Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default Subscription;
