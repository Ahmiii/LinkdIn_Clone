import React, { useState } from "react";
import UploadContent from "./UploadContent/UploadContent";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { db } from "../../../../firebase";

import "./FeedTop.css";
const FeedTop = () => {
  const [input, setInput] = useState("");

  const Post = (e) => {
    setInput(e.target.value);
  };

  const submitPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Ahmed Faraz",
      description: "code from heart",
      photoUrl: "",
      post: input,
    });
  };

  return (
    <div className="feed_inputContainer">
      <div className="feed__input">
        <CreateIcon />
        <form>
          <input type="text" value={input} onChange={Post}></input>
          <button type="submit" onClick={submitPost}>
            Submit
          </button>
        </form>
      </div>
      <div className="feed__uploadMenus">
        <UploadContent Icon={ImageIcon} title="Photo" color="#70B5F9" />
        <UploadContent Icon={SubscriptionIcon} title="Vidoe" color="#7FC15E" />
        <UploadContent
          Icon={EventNoteIcon}
          title="Event"
          color="rgb(231, 163, 62)"
        />
        <UploadContent
          Icon={CalenderViewDayIcon}
          title="Write article"
          color="#F5987E"
        />
      </div>
    </div>
  );
};

export default FeedTop;
