import React, { useState, useEffect } from "react";
import FeedTop from "./FeedTop/FeedTop";
import FeedPost from "./FeedPost/FeedPost";
import { db } from "../../../firebase";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="Feed">
      <FeedTop />
      {posts &&
        posts.length &&
        posts.map((post) => {
          return (
            <FeedPost
              key={post.id}
              name={post.data.name}
              description={post.data.description}
              post={post.data.post}
            />
          );
        })}
    </div>
  );
};

export default Feed;
