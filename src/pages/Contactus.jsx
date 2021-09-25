import React from "react";
import Colors from "../components/smallcomponents/Color";
import contactimg from "../assets/contactus.png";
import { SiTiktok } from "react-icons/si";
import socialMedia from "../components/smallcomponents/SocialMedia.js";

import {
  AiOutlineFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

// import one from "../assets/lottiefiles/one.json";

function Contactus() {
  return (
    <div style={styles.firstmain}>
      {/* this is the div that divides top */}
      <div style={{ height: "13vh" }}></div>
      {/* start of all container div */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* this is a gap */}

        <div>
          <div style={{ margin: "20px auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input style={styles.imagestyle} placeholder="email address" />
              <input style={styles.userintstyle} placeholder="Your message" />
            </div>
          </div>

          <div>
            <button style={styles.textandbutton}>Submit</button>
          </div>
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "grey",
              marginTop: "15px",
            }}
          ></div>
        </div>

        {/* //another Socialmedioa containeer */}
        <div style={styles.socialmediacontainer}>
          <div style={styles.socialMediamaintitle}>SOCIAL MEDIA</div>
          <a href={socialMedia.facebook} style={styles.rightcontaineritems}>
            <div style={styles.iconstyle}>
              <AiOutlineFacebook />
            </div>
            <div style={styles.smtext}>facebook</div>
          </a>

          <a style={styles.rightcontaineritems} href={socialMedia.youtube}>
            <div style={styles.iconstyle}>
              <AiFillYoutube />
            </div>
            <div style={styles.smtext}>YouTube</div>
          </a>

          <a style={styles.rightcontaineritems} href={socialMedia.twitter}>
            <div style={styles.iconstyle}>
              <AiFillTwitterCircle />
            </div>
            <div style={styles.smtext}>Twitter</div>
          </a>

          <a style={styles.rightcontaineritems} href={socialMedia.linkedin}>
            <div style={styles.iconstyle}>
              <AiFillLinkedin />
            </div>
            <div style={styles.smtext}>LinkedIn</div>
          </a>

          <a style={styles.rightcontaineritems} href={socialMedia.instragram}>
            <div style={styles.iconstyle}>
              <AiOutlineInstagram />
            </div>
            <div style={styles.smtext}>Instragram</div>
          </a>

          <a style={styles.rightcontaineritems} href={socialMedia.tiktok}>
            <div style={styles.iconstyle}>
              <SiTiktok />
            </div>
            <div style={styles.smtext}>Tiktok</div>
          </a>
        </div>

        {/* amother */}
        <img
          style={styles.contactimage}
          src={contactimg}
          alt="contact us cover"
        />
      </div>
      {/* //end of social media container */}
    </div>
  );
}

const styles = {
  firstmain: {
    display: "flex",
    position: "static",
    flexDirection: "column",
    width: "100% ",

    // backgroundColor: Colors.secondary,
  },
  textandbutton: {
    width: "300px",
    height: "50px",
    borderRadius: "25px",
    color: "white",
    backgroundColor: Colors.try3,
    textAlign: "center",
  },
  imagestyle: {
    width: "250px",
    height: "40px",
    borderRadius: "25px",
    margin: "12px auto",
    textAlign: "center",
  },
  contactimage: {
    width: "80%",
    height: "550px",
    borderRadius: "35px",
    backgroundRepeat: "norepeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    minWidth: "250px",
    maxWidth: "450px",
    // backgroundImage: `URL(${contactimg})`,
  },
  userintstyle: {
    width: "80%",
    height: "100px",
    borderRadius: "25px",
    margin: "12px auto",
    textAlign: "center",
  },
  socialmediacontainer: {
    margin: "10px",
    width: "100%",
    height: "550px",
    backgroundColor: Colors.try3,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    maxWidth: "450px",
    minWidth: "200px",
  },
  socialMediamaintitle: {
    padding: "20px",
    fontSize: "27px",
    backgroundColor: Colors.three,
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    color: "white",
    textAlign: "center",
  },

  rightcontaineritems: {
    width: "90%",
    height: "55px",
    backgroundColor: Colors.four,
    margin: "15px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    textDecoration: "none",
  },
  smtext: {
    fontWeight: "bold",
    color: Colors.one,
    fontSize: "22px",
  },
  iconstyle: {
    marginRight: "12px",
    marginTop: "5px",
    fontWeight: "bold",
    fontSize: "30px",
    color: "green",
  },
};

export default Contactus;
