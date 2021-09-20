import React from "react";
import Colors from "../components/smallcomponents/Color";

function Blogs() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "90% ",
          right: "0px",
          left: "0px",

          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div
          style={{
            marginTop: "120px",
            width: "100%",
            height: "100px",
            backgroundColor: Colors.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            fontSize: "25px",
            fontWeight: "bold",
            color: Colors.homeContentcolor,
          }}
        >
          Blogs
        </div>

        <div style={styles.blogsmain}>
          <div style={styles.flexitems}></div>
          <div style={styles.flexitems}></div>
          <div style={styles.flexitems}></div>
          <div style={styles.flexitems}></div>
        </div>
      </div>
    </>
  );
}

const styles = {
  blogsmain: {
    backgroundColor: Colors.primary,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: "10px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  flexitems: {
    width: "350px",
    height: "350px",
    margin: "10px",
    borderRadius: "10px",
    padding: "5px",
    backgroundColor: "white",
  },
};

export default Blogs;
