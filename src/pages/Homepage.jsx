import React from "react";
import HomeItemBox from "../components/HomeItemBox";
import HomePageCover from "../components/HomePageCover";
import Colors from "../components/collections/Color";
import Picture from "../components/collections/Pictures";
// import cover from "../assets/founder.png";
import "../components/stylecss/extra.css";
import Services from "../components/smallcomponents/Services";

function Homepage() {
  return (
    // style={styles.homespace_state_min}
    <div style={styles.homepage}>
      <div style={{ height: "12vh" }}></div>
      <div style={styles.coverimageparent}>
        <img
          src={Picture.homewall}
          style={styles.coverimage}
          alt="landing page wall"
        />
      </div>

      <div>
        <HomePageCover />
      </div>
      <HomeItemBox />
      <div style={styles.coverimageparent}>
        <Services />
      </div>

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
  coverimageparent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  coverimage: {
    height: "50%",
    width: "98%",
    maxWidth: "1800px",
    minWidth: "270px",
    backgroundSize: "cover",
    maxHeight: "650px",
  },
  containertext: {
    position: "static",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    height: "50px",
    color: "GREEN",
    marginTop: "10px",
  },
  serviceimage: {
    height: "60%",
    width: "98%",
    maxWidth: "1350px",
    minWidth: "270px",
    backgroundSize: "cover",
    maxHeight: "590px",
    minHeight: "210px",
    border: `solid 3px ${Colors.four}`,
    Padding: "5px",
  },
};

export default Homepage;
