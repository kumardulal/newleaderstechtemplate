import React from "react";
import Colors from "../components/collections/Color";
import ResponsivePlayer from "../components/smallcomponents/Video/ResponsivePlayer";

export default function ProjectDetails() {
  return (
    <div style={styles.productdetailmainCont}>
      <div style={{ height: "12vh" }}></div>
      <div style={styles.projecttitle}>PROJECT: CLINIC </div>

      {/* start */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <div style={styles.videoplayerdiv}>
          <ResponsivePlayer />
        </div>

        <div style={styles.introdiv}>
          <div
            style={{
              width: "80%",
              fontSize: "13px",
              minWidth: "250px",
              maxWidth: "800px",
            }}
          >
            INTRO: This is the small project done to uplift the skill so that i
            can start with another project easy and pg, This has the abilily to
            record the patient history
          </div>
        </div>
      </div>
      {/* end */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1600px",
          backgroundColor: Colors.one,
          alignSelf: "center",
          borderRadius: "20px",
        }}
      >
        <div style={styles.descproject}>
          <div>FEATURE 1</div>
        </div>
        <div style={styles.descproject}>
          <div>FEATURE 2</div>
        </div>
        <div style={styles.descproject}>
          <div>FEATURE 3</div>
        </div>
        <div style={styles.descproject}>
          <div>FEATURE 4</div>
        </div>
        <div style={styles.descprojectlast}>
          description : This is the small project done to uplift the skill so
          that i can start with another project easy and pg, This has the
          abilily to record the patient history
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "25px",
        }}
      >
        <div>I LIVE INSIDE THOSE VIBRATION</div>
      </div>
    </div>
  );
}
const styles = {
  productdetailmainCont: {
    display: "flex",

    flexDirection: "column",
    justifyContent: "space-around",
    alignItem: "center",
    width: "100%",
    backgroundColor: Colors.four,
    color: Colors.text1,
  },
  projecttitle: {
    height: "45px",
    width: "85%",
    fontWeight: "bold",
    fontSize: "20px",
    color: Colors.text1,
    marginLeft: "10%",
    backgroundColor: Colors.five,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
    minWidth: "200px",
    maxWidth: "800px",
  },
  videoplayerdiv: {
    width: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
    maxWidth: "800px",
    border: "solid 10px",
    borderRadius: "20px",
  },
  introdiv: {
    margin: "10px",
    backgroundColor: Colors.six,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  },
  descproject: {
    width: "98%",
    height: "200px",
    margin: "12px",
    backgroundColor: Colors.five,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "450px",
  },
  descprojectlast: {
    width: "80%",
    height: "300px",
    backgroundColor: Colors.six,
    borderRadius: "10px",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    maxWidth: "1800px",
    padding: "20px",
  },
};
