import React from "react";
import { Avatar } from "@material-ui/core";
import PostReactoins from "./PostReactions/PostReactions";
import "./FeedPost.css";
const FeedPost = ({ name, description, photoUrl, post }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{post}</p>
      </div>
      <PostReactoins />
    </div>
  );
};

export default FeedPost;
