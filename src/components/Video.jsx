import React from "react";
import styles from './Css/Video.css'

const video = props => {
  return (
    <div>
      <iframe
        src={"http://www.youtube.com/embed/" + props.video.id.videoId}
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
      <div>
          <p className='vidTitle'>{props.video.snippet.channelTitle}</p>
          <p className='vidDesc'>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default video;
