import React from "react";
import Colors from "../collections/Color";
import Picture from "../collections/Pictures";

export default function Services() {
  return (
    <img
      style={{
        width: "100%",
        maxWidth: "1370px",
        height: "auto",
        margin: "20px",
        border: `solid 2px ${Colors.five}`,
        maxHeight: "600px",
        minHeight: "270px",
      }}
      src={Picture.services}
      alt="services details"
    />
  );
}
