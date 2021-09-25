import React from "react";
import Colors from "../components/smallcomponents/Color";
import ResponsivePlayer from "../components/smallcomponents/Video/ResponsivePlayer";

export default function ProjectDetails() {
  return (
    <div style={styles.productdetailmainCont}>
      <div style={styles.projecttitle}>PROJECT: CLINIC </div>

      {/* start */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
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
              maxWidth: "500px",
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
      <div>I LIVE INSIDE THOSE VIBRATION</div>
    </div>
  );
}
const styles = {
  productdetailmainCont: {
    display: "flex",
    marginTop: "13vh",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItem: "center",

    // backgroundColor: Colors.try4,
  },
  projecttitle: {
    height: "45px",
    width: "85%",
    fontWeight: "bold",
    fontSize: "20px",
    color: Colors.try3,
    marginLeft: "10%",
    backgroundColor: Colors.four,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
    minWidth: "200px",
    maxWidth: "600px",
  },
  videoplayerdiv: {
    width: "93%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
    minWidth: "270px",
    maxWidth: "680px",
    border: "solid 10px",
    borderRadius: "20px",
  },
  introdiv: {
    margin: "10px",
    backgroundColor: Colors.one,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  },
  descproject: {
    width: "300px",
    height: "250px",
    margin: "12px",
    backgroundColor: Colors.one,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  descprojectlast: {
    width: "80%",
    height: "300px",
    backgroundColor: Colors.one,
    borderRadius: "10px",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
  },
};
