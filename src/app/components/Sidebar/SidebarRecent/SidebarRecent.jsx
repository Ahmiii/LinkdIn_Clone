import React from "react";
import "./SidebarRecent.css";
const SidebarRecent = () => {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar__recentItems">
      <p>Recent</p>
      {recentItem("Reactjs")}
      {recentItem("Reactjs")}
      {recentItem("Reactjs")}
      {recentItem("Reactjs")}
      {recentItem("Reactjs")}
      {recentItem("Reactjs")}
      {recentItem("Reactjs")}
    </div>
  );
};

export default SidebarRecent;
