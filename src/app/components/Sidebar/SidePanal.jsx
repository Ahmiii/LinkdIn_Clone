import React from "react";
import SidebarTop from "./SidebarTop/SidebarTop";
import SidebarStats from "./SidebarStats/SidebarStats";
import SidebarRecentItems from "./SidebarRecent/SidebarRecent";
import "./SidePanal.css";
const SidePanal = () => {
  return (
    <div className="sidebar">
      <SidebarTop />
      <SidebarStats />
      <SidebarRecentItems />
    </div>
  );
};

export default SidePanal;
