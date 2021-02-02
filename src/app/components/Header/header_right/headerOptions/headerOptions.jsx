import React from "react";
import "./headerOptions.css";
const headerOptions = ({ Icon, title }) => {
  console.log("heelo world");
  return (
    <div>
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default headerOptions;
