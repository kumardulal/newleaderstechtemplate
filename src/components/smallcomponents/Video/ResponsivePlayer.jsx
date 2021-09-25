import React from "react";
import ReactPlayer from "react-player";

function ResponsivePlayer(props) {
  return (
    <ReactPlayer
      width="100%"
      controls={true}
      url="https://youtu.be/GE9khwVsNmY"
    />
  );
}

export default ResponsivePlayer;
