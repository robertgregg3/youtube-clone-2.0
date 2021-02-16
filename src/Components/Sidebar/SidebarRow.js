import React from "react";
import "../../css/SidebarRow.css";

const SidebarRow = ({ Icon, title, src }) => {
  return (
    <div className="sidebarRow">
      {<Icon />}
      {title ? <h4>{title}</h4> : <img src={src} />}
    </div>
  );
};

export default SidebarRow;
