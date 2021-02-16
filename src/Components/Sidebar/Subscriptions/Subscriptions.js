import React from "react";
import Subscription from "./Subscription";
import { Avatar } from "@material-ui/core";

const Subscriptions = () => {
  return (
    <div className="subscriptions">
      <Subscription
        Icon={Avatar}
        title="SypherFF"
        broadcasting={false}
        amountOfNewVideos={0}
      />
      <Subscription
        Icon={Avatar}
        title="SypherT3"
        broadcasting="true"
        amountOfNewVideos={3}
      />
      <Subscription
        Icon={Avatar}
        title="SypherFF"
        broadcasting={false}
        amountOfNewVideos={0}
      />
      <Subscription
        Icon={Avatar}
        title="SypherF7"
        broadcasting={false}
        amountOfNewVideos={7}
      />
      <Subscription
        Icon={Avatar}
        title="SypherT15"
        broadcasting="true"
        amountOfNewVideos={15}
      />
      <Subscription
        Icon={Avatar}
        title="SypherFF"
        broadcasting={false}
        amountOfNewVideos={0}
      />
    </div>
  );
};

export default Subscriptions;
