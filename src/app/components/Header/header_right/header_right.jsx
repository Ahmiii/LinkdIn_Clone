import React from "react";
import HeaderOption from "./headerOptions/headerOptions";
import "./header_right.css";

const header_right = () => {
  console.log("heelo world");

  return (
    <div className="header__right">
      <HeaderOption title="Home" />
      <HeaderOption title="My Network" />
    </div>
  );
};

export default header_right;
