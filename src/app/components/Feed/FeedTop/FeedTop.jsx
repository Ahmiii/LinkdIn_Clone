import React from "react";
import "./FeedTop.css";
import CreateIcon from "@material-ui/icons/Create";
const FeedTop = () => {
  return (
    <div className="feed_inputContainer">
      <div className="feed__input">
        <CreateIcon />
        <form>
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedTop;
