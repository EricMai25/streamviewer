import React from "react";

const home = props => {
  return (
    <div>
      <iframe
        src={"http://www.youtube.com/embed/" + props.video}
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default home;
