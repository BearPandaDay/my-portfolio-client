import React from "react";
import { FloatButton } from "antd";
import {CommentOutlined,LinkedinOutlined,FacebookOutlined,WhatsAppOutlined,TwitterOutlined,} from "@ant-design/icons";

export function Floatbutton() {
  const Array = [
    {
      icon: <FacebookOutlined Style={"color: #3b5998 !important;"} />,
      url: "https://www.facebook.com/profile.php?id=100003356084598",
    },
    {
      icon: <WhatsAppOutlined Style={"color: #25D366 !important;"} />,
      url: "https://wa.me/573003016168/",
    },
    {
      icon: <TwitterOutlined Style={"color: #0e76a8 !important;"} />,
      url: undefined,
    },
    {
      icon: <LinkedinOutlined Style={"color: #0e76a8 !important;"} />,
      url: "https://www.linkedin.com/in/luis-alfredo-de-la-ossa-diaz-8b63ba264"
    }
  ]
  return (
    <div>
      <FloatButton.Group trigger="hover" type="primary" style={{right: 24,bottom: 100,wordWrap: "break-word",}} icon={<CommentOutlined />}>
        {Array.map((value, index) => <FloatButton trigger="hover" href={value.url} icon={value.icon} /> ) }
      </FloatButton.Group>
    </div>
  );
}
