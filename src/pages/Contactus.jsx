import React from "react";
import Colors from "../components/collections/Color";
import ContactForm from "../components/ContactForm";

import Services from "../components/smallcomponents/Services";
import SocialMediaView from "../components/SocialMediaView";

// import one from "../assets/lottiefiles/one.json";

function Contactus() {
  return (
    <div style={styles.firstmain}>
      <div style={styles.contactSocialWrapper}>
        <ContactForm />
        <SocialMediaView />
      </div>

      {/* //end of social media container */}
      <Services />
    </div>
  );
}

const styles = {
  contactSocialWrapper: {
    display: "flex",
    position: "static",
    flexDirection: "row",
    width: "100% ",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",

    // backgroundColor: Colors.try2,
  },
  firstmain: {
    marginTop: "13vh",
    display: "flex",
    position: "static",
    width: "100% ",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    Padding: "10px",

    // backgroundColor: Colors.try2,
  },
};

export default Contactus;
