import React, {useEffect, useState} from "react";
import { Layout, Image, Space, Menu } from "antd";
import { image } from "../../assets";
import { MenusHeader } from "./MenusHeader";

const imagePath = image.me;
const imagePortfolio = image.logoHeader;
const backgroundIntroduction = image.backgroundIntroduction;

const { Header, Content, Sider } = Layout;

const Casterisk = _ => {
  return (
    <h2
      style={{
        textAlign: "left",
        marginLeft: "3vw",
        letterSpacing: "2.6vw",
        fontSize: "2vw",
        WebkitTextStroke: "5px white",
        textShadow: "0px 0px 50px rgba(255,0,0,1)",
        opacity: 0.3,
      }}
    >
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
      myComponents.push(<Casterisk />)      
    }
  } else if (windowWidth >= 560 && windowWidth < 786) {
    for (let i = 0; i < 3; i++) { 
      myComponents.push(<Casterisk />)      
    }
  } else {
    for (let i = 0; i < 4; i++) {
      myComponents.push(<Casterisk />)      
    }
  }

  return (
    <>
      <div>
        <Space
          direction="vertical"
          style={{
            width: "100%",
            background: "green",
          }}
          size={[0, 48]}
          >
          <Layout
            style={{
              // height: "100vh",
              // height: "100%",
            }}
          >
            <Sider
              width={"30%"}
              // height={"100%"}
              style={{
                textAlign: "center",
                lineHeight: "65px",
                color: "#D5DBE8",
                // background: "none",
                opacity: 1,
              }}
            >
              <h2>
                <strong>
                  <h4
                    Style="
                      background-color: #000012;
                      border-radius: 20px;
                      width: 170px;
                      font-family: Arial; 
                      text-aligh: center;
                      padding: 0; 
                      box-shadow: 8px 8px 8px 5px rgba(0, 0, 0, 0.2);
                      margin: 0 auto;
                    "
                  >
                    PORTFOLIO
                  </h4>
                </strong>
                <br />
              </h2>
              {
                myComponents
              } 
            </Sider>
            <Layout>
              <Header
                style={{
                  // background: "#0A090A",
                  position: "sticky", // PERMANECER QUIETO EN LA PAGINA
                  top: 0,
                  zIndex: 1,
                  width: "100%",
                  height: 50,
                  borderBottomRightRadius: "10px",
                }}
              >
                <div
                  style={{
                    float: "left",
                    margin: "0 auto",
                    height: "100%",
                    minHeight: "20px",
                    textAlign: "center",
                    // background: "none",
                  }}
                >
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
                  style={{
                    height: 40,
                    lineHeight: "65px",
                  }}
                />
              </Header>

              <Content
                style={{
                  // height: "630px",
                  background: "rgb(231, 246, 249)",
                  backgroundImage: `url("${backgroundIntroduction}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundAttachment: "fixed",
                  display: "flex",
                }}
              >
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
                          marginTop: "30%",
                          fontFamily: "Arial",
                          color: "#000000",
                          fontSize: "5vw",
                          backgroundColor: "#F5D90A",
                          // width: "120px",
                          // height: "120px",
                          float: "right",
                          borderRadius: "100px",
                          boxShadow: "8px 8px 10px 5px rgba(50, 50, 0, 0.8)",
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
                      style={{
                        boxShadow:
                          "12px 12px 12px 8px rgba(255, 255, 255, 0.267)",
                        margin: "10% auto",
                        borderRadius: "100% 30px 30px 30px",
                        background: "rgba(255, 255, 255)",
                      }}
                      width={"100%"}
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
        margin: 20vw 0 0 20vw; 
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
                  I'M WEB DEVELLOPER
                </p>
              </strong>
            </div>
          </Layout>
        </Space>
      </div>
    </>
  );
}
