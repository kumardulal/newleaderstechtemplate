import React from "react";
import Colors from "../collections/Color";
import Picture from "../collections/Pictures";

export default function Services() {
  return (
    <img
      style={{
        width: "98%",
        maxWidth: "1700px",
        height: "auto",
        margin: "20px",
        border: `solid 2px ${Colors.five}`,

        minHeight: "270px",
      }}
      src={Picture.services}
      alt="services details"
    />
  );
}
