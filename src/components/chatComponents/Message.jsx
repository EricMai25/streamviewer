import React from "react";
import styles from "../Css/Message.css";

const messages = props => {
  return (
    <div className="mes">
      <div className="userTitle">
        <img className="mesImage" src={props.msg.user.imageUrl} />
        <span className="mesUser">{props.msg.user.name}:</span>
      </div>
      <p className="mesWrap">{props.msg.msg}</p>
    </div>
  );
};

export default messages;
