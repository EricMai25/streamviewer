import React from "react";
import Video from './Video.jsx'

const home = props => {
  return (
    <div style={{height: '100%'}}>
      {props.video.map(vids =>{
        return <Video video={vids}/>
      })}
    </div>
  );
};

export default home;
