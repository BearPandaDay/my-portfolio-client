import React from "react";
import { Right } from "./Right";
import { Left } from "./Left";
import { image } from "../../assets/png";

export function NudoSecond() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        textAlign: "center",
        color: "white",
        backgroundImage: `url(${image.backgroundnodosecondpng})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
        // height: 600,
        // background: "rgba(221, 233, 243, 0.918)",
      }}
    >
      {/* <div style={{
        display: "flex",
        // background:"linear-gradient(to bottom right, rgba(8, 6, 18, 0.8), rgba(100, 150, 135, 0.4), rgba(8, 6, 18, 0.8)",
      }}> */}
        <div
          style={{
            display: "flex",
            width: "50%",
            margin: "0 auto",
            background: "#020116e0",
            // fontSize: 10,
            // height: 300,
            // backgroundColor: "red",
          }}
        >
          <Left />
        </div>

        <div
          style={{
            display: "flex",
            width: "50%",
            margin: "0 auto",
            // fontSize: 10,
            // height: 300,
            // backgroundColor: "green",
          }}
        >
          <Right />
        </div>
      </div>
    // </div>
  );
}
