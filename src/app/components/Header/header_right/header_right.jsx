import React from "react";
import HeaderOption from "./headerOptions/headerOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "./header_right.css";

const header_right = () => {
  console.log("heelo world");

  return (
    <div className="header__right">
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
    </div>
  );
};

export default header_right;
