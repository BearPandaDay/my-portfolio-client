import React from 'react'
import { Floatbutton, FloatButtonBackTop, FooterComponent, Introduction, NudoFirst, NudoSecond } from "../Components";
import { Contact } from '../Components/Contact/Contact';

import './Home.css';

export function Home() {
  return (
    <div style={{
      background: "rgb(8 6 18)",
    }}>
      <div style={{
        width: "90%",
        margin: "0 auto",
      }}> 
        <FloatButtonBackTop />
        <Floatbutton />
        <Introduction /> 
        <NudoFirst />
        <NudoSecond /> 
        <Contact />
        <FooterComponent /> 
      </div>
    </div>
  )
}
