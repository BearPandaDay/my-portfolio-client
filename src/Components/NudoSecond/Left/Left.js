import React from "react";
import { Image, Space } from "antd";
import { Knowledge, ListKnowledge } from "./Knowledge";

export function Left() {
  return (
    <div
      style={{
        borderRadius: 20,
        margin: "2vw auto",
        // background: "blue",
        // width: "65%",
        maxWidth: "80%",
        // overflowY: 'scroll',
        // height: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "3vw",
          // color: "#0b0b1fff",
          // color: "#ffffffff",
          // textShadow: "0px 0px 80px #ffffff",
          // WebkitTextStroke: "3px white",
          // boxShadow: "-50px -30px 50px 15px rgba(0, 255, 255, 0.6)",
        }}
      >
        Professional Skills Works
        Knowledge
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {ListKnowledge().map((value) => {
            return <Space size={[8, 16]} wrap><Knowledge logo={value.logo} name={value.name} /></Space>
          })}
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
