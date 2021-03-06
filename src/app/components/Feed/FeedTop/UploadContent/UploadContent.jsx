import React from "react";
import "./UploadContent.css";
const UploadContent = ({ Icon, title, color }) => {
  return (
    <div className="upload">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default UploadContent;
