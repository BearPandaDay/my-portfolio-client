import { Image } from "antd";

import "./Knowledge.scss";

export function Knowledge(props) {
  const {logo, name} =  props;

  return (
    <div style={{ margin: "0 auto", padding: 5}}>
      <Image
        className="images-knowledges"
        preview={false}
        src={logo}
      />
      <h3>{name}</h3>
    </div>
  );
}
