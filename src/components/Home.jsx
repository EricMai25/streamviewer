import React from "react";

const home = props => {
  return (
    <div>
      <iframe
        src={"http://www.youtube.com/embed/" + props.video}
        width="560"
        height="315"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default home;
