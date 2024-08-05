import React from "react";
import { Image } from "antd";
import { imageJpg } from "../../assets";
import { image } from "../../assets";

export function NudoFirst() {
  const iondasSectionTwo = imageJpg.ondasSectionTwo;
  const ibackgroundSectionTwo = image.backgrooundfirstpng;
  const photo2 = imageJpg.me;

  return (
    <div
      style={{
        display: "flex",
        background: "rgba(233, 233, 255, 0.918)",
        backgroundImage: `url("${ibackgroundSectionTwo}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
        // background:"linear-gradient(to bottom right, rgba(8, 6, 18, 0.8), rgba(100, 150, 135, 0.4), rgba(8, 6, 18, 0.8)",
        // height: 800
      }}
    >
      <div
        style={{
          wordWrap: "break-word",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          borderRight: '1px dashed gray',
        }}
      >
        <div style={{
          margin: "20% auto",
          width: "50%",
          wordWrap: "break-word",
          alignSelf: "center",
          minWidth: 200,
          borderRadius: 20,
          boxShadow: "-50px -30px 50px 15px rgba(0, 0, 0, 0.6)",
        }}>
          <Image
            alt="example"
            style={{ 
              borderRadius: 20, 
              width: "100%", 
              margin: "0 auto", 
            }}
            src={`${photo2}`}
          />
        </div>
      </div>
      {/* RIGHT */}
      <div
        style={{
          wordWrap: "break-word",
          width: "50%",
          borderLeft: '1px dashed gray',
          display: "flex",   // UNIDO PARA CENTRAR EN EL MEDIO PADRE
          justifyContent: "center",   // UNIDO PARA CENTRAR EN EL MEDIO PADRE
        }}
        >
        <div
          style={{
            alignSelf: "center",   // UNIDO PARA CENTRAR EN EL MEDIO HIJO
            borderRadius: 20,
            background: "rgba(255, 255, 255, 0.92)",
            boxShadow: "-18px -18px 50px 10px rgba(0, 0, 0, 0.4)",
            padding: 20,
            position: "relative",
            margin: "0 auto",
            width: "50%",
            // marginTop: "20%",
            // marginBottom: "15%",
            fontFamily: "arial",
          }}
          >
          <div
            style={{
              display: "flex",
              height: "50px",
            }}
            >
            <div
              style={{
                margin: "0 auto",
                padding: 0,
                // background: "purple",
                textAlign: "right",
              }}
              >
              <h3
                style={{
                  margin: 0,
                  wordWrap: "break-word",
                  // background: "blue",
                }}
              >
                WHO AM I
              </h3>
              <h1 style={{ marginTop: "-7px" }}>HELLO</h1>
            </div>
            <div
              style={{
                backgroundImage: `url("${iondasSectionTwo}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginLeft: 5,
                width: "100%",
                height: "100%",
              }}
            ></div>
          </div>
          <div
            style={{
              textAlign: "justify",
            }}
          >
            <p> 
              I am a very serious person who wants to work and learn every day.
            </p>
            <p>
              I am responsible and able to communicate well with a work team. I
              like to put into practice each of the knowledge acquired
              throughout my school and university learning course in order to
              make optimal decisions together with a work team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
