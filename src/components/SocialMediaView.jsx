import React from "react";
import socialMedia from "../components/collections/SocialMedia";
import { SiTiktok } from "react-icons/si";
import {
  AiOutlineFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import Colors from "./collections/Color";
export default function SocialMediaView() {
  return (
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
  );
}
const styles = {
  socialmediacontainer: {
    margin: "10px",
    width: "95%",
    height: "auto",
    backgroundColor: Colors.text2,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    maxWidth: "700px",
    minWidth: "280px",
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
