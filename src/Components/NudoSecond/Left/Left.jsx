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
          fontSize: "2.2vw",
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
