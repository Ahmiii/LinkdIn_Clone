import React from "react";
import UploadContent from "./UploadContent/UploadContent";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";

import "./FeedTop.css";
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
