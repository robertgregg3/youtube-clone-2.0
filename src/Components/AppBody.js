import React from "react";
import "../css/AppBody.css";
import Content from "./Content";
import Sidebar from "./Sidebar";

const AppBody = () => {
  return (
    <div className="appBody">
      <Sidebar />
      <Content />
    </div>
  );
};

export default AppBody;
