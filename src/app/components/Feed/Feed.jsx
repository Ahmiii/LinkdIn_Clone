import React from "react";
import FeedTop from "./FeedTop/FeedTop";
import FeedPost from "./FeedPost/FeedPost";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="Feed">
      <FeedTop />
      <FeedPost />
    </div>
  );
};

export default Feed;
