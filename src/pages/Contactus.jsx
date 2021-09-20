import React from "react";
import Colors from "../components/smallcomponents/Color";
import contactimg from "../assets/cover.png";

function Contactus() {
  return (
    <div
      style={{
        display: "flex",
        position: "static",
        flexDirection: "column",
        marginTop: "120px",
        width: "100% ",
        // backgroundColor: Colors.secondary,
      }}
    >
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
                <input style={styles.imagestyle} defaultValue="email address" />
                <input
                  style={styles.userintstyle}
                  defaultValue="Your message"
                />
              </div>
            </div>

            <div>
              <button style={styles.textandbutton}>Submit</button>
            </div>
          </div>
        </div>

        {/* //another containeer */}
        <div
          style={{
            margin: "10px",
            width: "390px",
            height: "auto",
            backgroundColor: Colors.third,
            borderRadius: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ padding: "9px" }}>SOCIAL MEDIA</div>
          <div style={styles.rightcontainer}>
            <text style={styles.smtext}>facebook</text>
          </div>
          <div style={styles.rightcontainer}>
            <text style={styles.smtext}>YouTube</text>
          </div>
          <div style={styles.rightcontainer}>
            <text style={styles.smtext}>Twitter</text>
          </div>
          <div style={styles.rightcontainer}>
            <text style={styles.smtext}>LinkedIn</text>
          </div>
          <div style={styles.rightcontainer}>
            <text style={styles.smtext}>Instragramn</text>
          </div>
          <div style={styles.rightcontainer}>
            <text style={styles.smtext}>Tiktok</text>
          </div>
        </div>
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
    backgroundColor: Colors.yellow,
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

  rightcontainer: {
    width: "90%",
    height: "55px",
    backgroundColor: Colors.try2,
    margin: "20px",
    borderRadius: "15px",
  },
  smtext: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
};

export default Contactus;
