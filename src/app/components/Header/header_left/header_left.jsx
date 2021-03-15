import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./header_left.css";
const header_left = () => {
  return (
    <div className="header__left">
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png"
        alt=""
      />
      <div className="header__search">
        <SearchIcon />
        <input type="text" />
      </div>
    </div>
  );
};

export default header_left;
