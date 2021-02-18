import React from "react";
import "../css/AppBody.css";
import Content from "./Content";
import Sidebar from "./Sidebar/Sidebar";
import TermsOfService from "./TermsOfService";
import Privacy from "./Privacy";
import { Switch, Route } from "react-router-dom";
import Watch from "./Watch";

const AppBody = () => {
  return (
    <div className="appBody">
      <Switch>
        <Route exact path="/">
          <Sidebar />
          <Content />
        </Route>
        <Route path="/privacy">
          <Sidebar />
          <Privacy />
        </Route>
        <Route path="/terms-of-service">
          <Sidebar />
          <TermsOfService />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
      </Switch>
    </div>
  );
};

export default AppBody;
