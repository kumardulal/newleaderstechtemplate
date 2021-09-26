import React from "react";
import Colors from "./collections/Color";
function ContactForm() {
  return (
    <div style={styles.contactdformMain}>
      <div
        style={{
          display: "flex",
          width: "90%",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundColor: Colors.five,
            height: "62px",
            borderTopRightRadius: "20px",
            color: "white",
          }}
        >
          <div
            style={{
              margin: "12px auto",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            Drop Us Message
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input style={styles.inputs} placeholder="Full Name" type="text" />
          <input
            style={styles.inputs}
            placeholder="Email/PhoneNumber"
            type="email"
          />
          <input style={styles.inputs} placeholder="Subject" type="text" />
          <textarea style={styles.inputs} placeholder="Message" type="text" />
        </div>
        {/* Divider line */}
        <div
          style={{
            height: "2px",
            backgroundColor: Colors.one,
            marginTop: "10px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        />
        <div style={{ margin: "20px" }}>
          <button style={styles.submitbtn}>Submit</button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  contactdformMain: {
    display: "flex",
    flexDirection: "column",
    width: "96%",
    height: "510px",
    backgroundColor: Colors.six,
    minWidth: "280px",
    maxWidth: "700px",
    borderRadius: "15PX",
    margin: "6px",
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    height: "50px",
    color: Colors.try3,
    textAlign: "center",
    margin: "3px",
  },
  submitbtn: {
    height: "55px",
    color: Colors.text1,
    backgroundColor: Colors.four,
    fontSize: "20px",
    textAlign: "center",
    width: "100%",
  },
};

export default ContactForm;
