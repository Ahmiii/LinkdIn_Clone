import React from "react";
import HeaderOption from "./headerOptions/headerOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BuisnessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Chat";
import "./header_right.css";

const header_right = () => {
  console.log("heelo world");

  return (
    <div className="header__right">
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
      <HeaderOption Icon={BuisnessCenterIcon} title="Jobs" />
      <HeaderOption Icon={ChatIcon} title="Messages" />
      <HeaderOption Icon={NotificationIcon} title="Notification" />
      <HeaderOption
        avatar="https://media-exp1.licdn.com/dms/image/C5103AQH5Rq4kt7yCxQ/profile-displayphoto-shrink_800_800/0/1577266457385?e=1617840000&v=beta&t=AOPYXG2HGgctT6r-ffvfbVp3Mb1poY9SRBshLLO4LhA"
        title="Ahmed Faraz"
      />
    </div>
  );
};

export default header_right;
