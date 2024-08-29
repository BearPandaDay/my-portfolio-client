import React from "react";
import { Image, Space } from "antd";
import { Knowledge, ListKnowledge } from "./Knowledge";

import './Left.scss'

export function Left() {
  return (
    <div className="content-left-knowledge">
      <h1>Professional Skills Works Knowledge</h1>
      <div className="content-image-knowledge">
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
