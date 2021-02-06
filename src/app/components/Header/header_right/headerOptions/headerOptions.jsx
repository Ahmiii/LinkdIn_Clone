import React from "react";
import "./headerOptions.css";
import { Avatar } from "@material-ui/core";
const headerOptions = ({ avatar, Icon, title }) => {
  console.log("heelo world");
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default headerOptions;
