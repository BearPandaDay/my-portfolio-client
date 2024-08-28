import {useEffect, useState} from "react";
import { Layout, Image, Space, Menu } from "antd";
import { image } from "../../assets";
import { MenusHeader } from "./MenusHeader";

import './Introduction.scss';

const imagePath = image.mecomplete;
const imagePortfolio = image.logoHeader;
const backgroundIntroduction = image.backgroundIntroduction;

const { Header, Content, Sider } = Layout;

const Asterisk = () => {
  return (
    <h2 className="asterisk-decoration">
      * * * * 
    </h2>
  )
}

export function Introduction() {
  const ListMenusHeader = MenusHeader();

  const myComponents = [];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  } 

  useEffect(() => {
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  if (windowWidth < 560) {
    for (let i = 0; i < 2; i++) {
      myComponents.push(<Asterisk />)      
    }
  } else if (windowWidth >= 560 && windowWidth < 786) {
    for (let i = 0; i < 3; i++) { 
      myComponents.push(<Asterisk />)      
    }
  } else {
    for (let i = 0; i < 4; i++) {
      myComponents.push(<Asterisk />)      
    }
  }

  return (
    <>
      <div>
        <Space direction="vertical" className="ant-space1">
          <Layout>
            <Sider className="ant-layout-sider-children1" width={"30%"}>
              <h2>
                  <h4>
                    PORTFOLIO
                  </h4>
              </h2>
              <br />
              { myComponents }
            </Sider>
            <Layout>
              <Header className="header-top-bar">
                <div className="container-img-portfolio">
                  <img
                    alt="example"
                    style={{ height: "100%", margin: "0 20px 0 -30px" }}
                    src={`${imagePortfolio}`}
                  />
                </div>
                <Menu 
                  onClick={_ => console.log(ListMenusHeader[0].as)}
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["0"]}
                  items={ListMenusHeader} 
                  style={{ height: 40, lineHeight: "65px", }}
                />
              </Header>

              <Content className="classcontentantd">
                <Image.PreviewGroup>
                  <div
                    style={{
                      // background: "#F2F2F2",
                      textAlign: "center",
                      position: "relative",
                      width: "50%",
                      height: "100%",
                      margin: "0 auto",
                      minHeight: "100",
                      paddingRight: "5%",
                    }}
                  >
                    <strong>
                      <p
                        style={{
                          WebkitTextStroke: "4px #000000",
                          padding: "3vw 1vw",
                          marginTop: "15%",
                          color: "#000000",
                          fontSize: "5vw",
                          backgroundColor: "#F5D90A",
                          float: "right",
                          borderRadius: "100%",
                          boxShadow: "8px 8px 10px 5px rgba(50, 50, 0, 0.8)",
                          aspectRatio: '1 / 1 !important',
                          display: "flex",
                          justifyContent: "center",
                          alignItems: 'center',
                        }}
                      >
                        DEV
                      </p>
                    </strong>
                  </div>
                  <div
                    style={{
                      // background: "#F2F2F2",
                      float: "right",
                      height: "100%",
                      textAlign: "center",
                      margin: "15px 45px 0 0",
                      width: "40%",
                    }}
                  >
                    <Image
                      className='ant-image-img-perfile-home'
                      height={"auto"}
                      src={imagePath}
                    />
                  </div>
                </Image.PreviewGroup>
              </Content>
            </Layout>
            <div
              Style="
        color: white;
        margin: 23vh 0 0 20vw; 
        // background: #000000; 
        position: absolute; 
        text-align: center; 
        // width: 30%;
        text-align: left;
        min-height: 100;
        max-width: 50%;
      "
            >
              <strong>
                <h1
                  Style="
          -webkit-text-stroke: 1px white; 
          font-family: Arial; 
          font-size: 4vw; 
          margin: 5px;"
                >
                  MY NAME IS
                </h1>
              </strong>
              <strong>
                <h1
                  Style="
          -webkit-text-stroke: 2px white; 
          font-family: Arial; 
          width: 80%;
          font-size: 5vw; 
          margin: 5px;"
                >
                  LUIS DE LA OSSA DIAZ
                </h1>
              </strong>
              <strong>
                <p
                  Style="
          color: black;
          // -webkit-text-stroke: 2px white; 
          background-color: #F5D90A;
          border-radius: 20px;
          width: 21.5vw;
          font-family: Arial; 
          font-size: 1.6vw; 
          text-align: center;
          padding: 20px 20px 20px 20px;
          box-shadow: 8px 8px 8px 5px rgba(0, 0, 0, 0.2);
          margin: 20px 5px 5px 5px;"
                >
                  I'M WEB DEVELOPER
                </p>
              </strong>
            </div>
          </Layout>
        </Space>
      </div>
    </>
  );
}
