import React from "react";
import { Avatar } from "@material-ui/core";
import PostReactoins from "./PostReactions/PostReactions";
import "./FeedPost.css";
const FeedPost = () => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Name</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="post__body">
        <p>Post</p>
      </div>
      <PostReactoins />
    </div>
  );
};

export default FeedPost;
