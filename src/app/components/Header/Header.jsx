import React from "react";
import Header_Left from "./header_left/header_left";
import Header_Right from "./header_right/header_right";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <Header_Left />
      <Header_Right />
    </div>
  );
};

export default Header;
