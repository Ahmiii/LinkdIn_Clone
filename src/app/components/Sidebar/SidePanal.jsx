import React from "react";
import SidebarTop from "./SidebarTop/SidebarTop";
import SidebarStats from "./SidebarStats/SidebarStats";
import "./SidePanal.css";
const SidePanal = () => {
  return (
    <div className="sidebar">
      <SidebarTop />
      <SidebarStats />
    </div>
  );
};

export default SidePanal;
