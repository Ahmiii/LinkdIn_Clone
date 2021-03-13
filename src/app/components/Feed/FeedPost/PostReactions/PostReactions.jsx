import React from "react";
import InputOpton from "../../FeedTop/UploadContent/UploadContent";
import LikeIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentIcon from "@material-ui/icons/ChatOutlined";
import ShareIcon from "@material-ui/icons/ShareOutlined";
import SendIcon from "@material-ui/icons/SendOutlined";
import "./PostReactions.css";
const PostReactions = () => {
  return (
    <div className="post__buttons">
      <InputOpton Icon={LikeIcon} title="Like" color="gray" />
      <InputOpton Icon={CommentIcon} title="Comment" color="gray" />
      <InputOpton Icon={ShareIcon} title="Share" color="gray" />
      <InputOpton Icon={SendIcon} title="Send" color="gray" />
    </div>
  );
};

export default PostReactions;
