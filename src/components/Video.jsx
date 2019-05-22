import React from "react";
import styles from './Css/Video.css'

const video = props => {
  return (
    <div style={{height: '100%'}}>
      <iframe
        src={"https://www.youtube.com/embed/" + props.video.id.videoId}
        width="100%"
        height="70%"
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
