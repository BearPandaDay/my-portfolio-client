import { Floatbutton, FloatButtonBackTop, FooterComponent, Introduction, NudoFirst, NudoSecond } from "../../Components";
import { Contact } from '../../Components/Contact/Contact';

import './Home.scss';

export function Home() {
  return (
    <div className="content-father-home">
      <div className="content-sections"> 
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
