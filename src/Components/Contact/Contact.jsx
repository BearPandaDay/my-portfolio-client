// import {BotonModal} from './BotonModal';
import { image } from "../../assets";

import './Contact.scss';

const fondoBlanco = image.fondoBlancopng;


export function Contact() {

  return (
    <div className="content-contact" id="id-ancla">
      <div className='content-img-avatar'>
        <img src={image.avatarme}/>
        <div>
          <strong>
            <span>Luis de la Ossa</span>
          </strong>
        </div>
      </div>

      <div className="content-info-contact box box-light">
        <span>&quot;Those who wish to contact me, may do so by using the following contact
        information I have provided below in the floating button on the right
        hand side of the page. Please feel free to contact me if you have any
        questions or concerns on social networks such as <strong>Facebook, Whatsapp,
        Twitter, LinkedIn.</strong>&quot;</span>
      </div>

      <div className="content-point-decoration">
        <span>.</span>
      </div>
      {/* <BotonModal /> */}
    </div>
  );
}
