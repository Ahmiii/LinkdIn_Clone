import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./header_left.css";
const header_left = () => {
  return (
    <div className="header__left">
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1612291985~hmac=49916e42e5c787c439d0f34a4d270639"
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
