import React from "react";
import Colors from "../components/smallcomponents/Color";
import contactimg from "../assets/cover.png";
import { SiTiktok } from "react-icons/si";
import socialMedia from "../components/smallcomponents/SocialMedia.js";
// import { useHistory } from "react-router-dom";

import {
  AiOutlineFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { Redirect } from "react-router";
// import one from "../assets/lottiefiles/one.json";

function Contactus() {
  return (
    <div
      style={{
        display: "flex",
        position: "static",
        flexDirection: "column",

        width: "100% ",
        // backgroundColor: Colors.secondary,
      }}
    >
      <div style={{ height: "150px" }}>
        iF YOU CAN SEE ME ,yOU ARE NEAR TO ME
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div>
          <div>
            <img
              style={{
                width: "80%",
                height: "300px",
                borderRadius: "35px",
              }}
              src={contactimg}
              alt="cover_od the contact"
            />
          </div>
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
        </div>

        {/* //another Socialmedioa containeer */}
        <div
          style={{
            margin: "10px",
            width: "390px",
            height: "auto",
            backgroundColor: Colors.homeContentcolor,
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              padding: "9px",
              fontSize: "28px",
              backgroundColor: "purple",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
          >
            SOCIAL MEDIA
          </div>
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
        {/* //end of social media container */}
      </div>
    </div>
  );
}

const styles = {
  textandbutton: {
    width: "300px",
    height: "50px",
    borderRadius: "25px",
    color: "white",
    backgroundColor: Colors.black,
    textAlign: "center",
  },
  imagestyle: {
    width: "300px",
    height: "50px",
    borderRadius: "25px",
    margin: "12px auto",
    textAlign: "center",
  },
  userintstyle: {
    width: "80%",
    height: "100px",
    borderRadius: "25px",
    margin: "12px auto",
    textAlign: "center",
  },

  rightcontaineritems: {
    width: "90%",
    height: "55px",
    backgroundColor: Colors.try2,
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
    color: Colors.primary,
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
