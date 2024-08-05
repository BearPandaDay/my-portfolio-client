import React from "react";
import { Image } from "antd";

export function Knowledge(props) {
  const {logo, name} =  props;

  return (
    <div style={{ margin: "0 auto", padding: 5}}>
      <Image
        // preview={false}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "100%",
          background: "white",
        }}
        src={logo}
      />
      <h3>{name}</h3>
    </div>
  );
}
