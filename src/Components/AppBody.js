import React from "react";
import "../css/AppBody.css";
import Content from "./Content";
import Sidebar from "./Sidebar/Sidebar";
import TermsOfService from "./TermsOfService";
import Privacy from "./Privacy";
import { Switch, Route } from "react-router-dom";

const AppBody = () => {
  return (
    <div className="appBody">
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/terms-of-service">
          <TermsOfService />
        </Route>
      </Switch>
    </div>
  );
};

export default AppBody;
