import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarTop.css";
const SidebarTop = () => {
  return (
    <div className="sidebar__top">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Seaview_%28Clifton_Beach%29_Karachi.jpg"
        alt=""
      />
      <Avatar className="sidebar__avatar" />
      <h2>Ahmed Faraz</h2>
      <h4>ahmii.shaikh18@gmail.com</h4>
    </div>
  );
};

export default SidebarTop;
