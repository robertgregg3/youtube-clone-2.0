import React from "react";
import Subscription from "./Subscription";
import { Avatar } from "@material-ui/core";

const Subscriptions = () => {
  return (
    <div className="subscriptions">
      <Subscription Icon={Avatar} title="Sypher" />
      <Subscription Icon={Avatar} title="Sypher" />
      <Subscription Icon={Avatar} title="Sypher" />
      <Subscription Icon={Avatar} title="Sypher" />
      <Subscription Icon={Avatar} title="Sypher" />
    </div>
  );
};

export default Subscriptions;
