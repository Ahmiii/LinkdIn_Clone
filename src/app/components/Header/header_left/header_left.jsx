import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./header_left.css";
const header_left = () => {
  return (
    <div className="header__left">
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1611514435~hmac=b118c20dc96852af9d81f223fe9e01ee"
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
