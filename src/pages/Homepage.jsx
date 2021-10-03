import React, { useEffect } from "react";
import HomeItemBox from "../components/HomeItemBox";
import HomePageCover from "../components/HomePageCover";
import Colors from "../components/collections/Color";
import Picture from "../components/collections/Pictures";
// import cover from "../assets/founder.png";
import "../components/styles/extra.css";
import { useSpring, animated } from "react-spring";
// import TestAnimation from "../components/styles/animations/TestAnimation";

function Homepage() {
  // useEffect(() => {
  //   console.log("I am present");
  //   return (
  //     <div style={{ height: "100vh", width: "100%", backgroundColor: "red" }}>
  //       This is mee
  //     </div>
  //   );
  // });
  //
  //Animations styles here destructured for bigger
  const animations = {
    animation1: useSpring({
      loop: true,
      from: {
        height: "auto",
        width: "80%",
        alignSelf: "center",
        opacity: "0%",
      },
      to: {
        width: "98%",
        alignSelf: "center",
        opacity: "100%",
      },
      config: { duration: 5000 },
    }),

    animation2: useSpring({
      loop: true,
      from: {
        height: "auto",
        width: "0%",
        alignSelf: "center",
        opacity: "0%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1700px",
      },
      to: {
        width: "98%",
        alignSelf: "center",
        opacity: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1700px",
      },
      config: { duration: 2000 },
    }),
  };

  return (
    // style={styles.homespace_state_min}

    <div style={styles.homepage}>
      <div style={{ height: "12vh" }}></div>
      <div style={styles.coverimageparent}>
        <animated.div style={animations.animation2}>
          <img
            src={Picture.homewall}
            style={styles.coverimage}
            alt="landing page wall"
          />
        </animated.div>
      </div>

      <animated.div style={animations.animation1}>
        <HomePageCover />
      </animated.div>

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
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  coverimageparent: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1700px",
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
    color: "green",
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
