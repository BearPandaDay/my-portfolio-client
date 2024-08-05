/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { image } from "../../assets";
import {BotonModal} from './BotonModal';

const fondoBlanco = image.fondoBlancopng;


export function Contact() {
  const styleDivFather = {
    position: "relative",
    // fontFamily: "arial",
    // height: 800,
    backgroundImage: `url("${fondoBlanco}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundAttachment: "fixed",
    textAlign: "center",
  };

  const styleDivChildrenImagePhoto = {
    // borderRadius: '100%',
    // background: "#0f0",
    width: 100,
    margin: "0 auto",
    position: "relative",
    textAlign: "center",
  };

  const styleImagePhoto = {
    // position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    marginTop: 50,
    background: "#FFFFFF",
    width: "100%",
    borderRadius: "100%",
    borderWidth: "4px",
    borderStyle: "solid",
    borderColor: "purple",
  };

  const styleDivBottom = {
    // display: "flex",
    // backgroundColor: "blue",
    width: "40%",
    margin: "30px auto auto auto",
    padding: 15,
    textAlign: "center",
    boxShadow: "0px 20px 15px -10px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div style={styleDivFather} id="id-ancla">
      <div style={styleDivChildrenImagePhoto}>
        <img src={image.faceme} style={styleImagePhoto} />
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <strong>
            <span>Luis de la Ossa</span>
          </strong>
        </div>
      </div>

      <div style={styleDivBottom}>
        {/* "Aquellos que deseen ponerse en contacto conmigo, pueden hacerlo
        utilizando la siguiente información de contacto que he proporcionado a
        continuación en el boton flotante que se encuentra a la derecha de la
        pagina. Por favor, no dude en comunicarse conmigo si tiene alguna
        pregunta o inquietud." */}
        "Those who wish to contact me, may do so by using the following contact
        information I have provided below in the floating button on the right
        hand side of the page. Please feel free to contact me if you have any
        questions or concerns on social networks such as <strong>Facebook, Whatsapp,
        Twitter, LinkedIn.</strong>"
      </div>
      <div style={{margin: "-40px auto auto auto", color: "purple"}}>
        <span style={{fontSize: 100,}}>.</span>
      </div>
      <BotonModal />
    </div>
  );
}
