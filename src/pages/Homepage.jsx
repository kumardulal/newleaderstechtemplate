import React from "react";
import HomeItemBox from "../components/HomeItemBox";
import HomePageCover from "../components/HomePageCover";
import Picture from "../components/smallcomponents/Pictures";
// import cover from "../assets/founder.png";
import "../components/stylecss/extra.css";

function Homepage() {
  return (
    // style={styles.homespace_state_min}
    <div style={styles.homepage}>
      <div style={{ height: "12vh" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Picture.homewall}
          style={{
            height: "50%",
            width: "98%",
            maxWidth: "1900px",
            minWidth: "270px",
            backgroundSize: "cover",
            maxHeight: "700px",
          }}
        />
      </div>

      <div>
        <HomePageCover />
      </div>
      <HomeItemBox />

      <div style={styles.containertext}>WE LIVE INSIDE THOSE VIBRATION</div>
    </div>
  );
}
const styles = {
  homepage: {
    display: "flex",
    flexDirection: "column",
    position: "static",
  },
  containertext: {
    position: "static",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    height: "50px",
  },
};

export default Homepage;
