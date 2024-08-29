import { Image } from "antd";
import { imageJpg } from "../../assets";
import { image } from "../../assets";
import retratoconlisenciapng from '../../assets/png/retratoconlisencia.png';

import './NudoFirst.scss';

export function NudoFirst() {
  const iondasSectionTwo = imageJpg.ondasSectionTwo;
  // const coffeeheight = image.coffeeheight;
  const photo2 = imageJpg.me;

  return (
    <div className="content-nudofirst">
      <div className="content-left">
        <div className="content-image">
          <Image //image
            alt="example"
            // src={`${photo2}`}
            src={retratoconlisenciapng}
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
        <div className="box box-light content-boxwhoami">
          <div className="content-header-whoami">
            <div className="textheader">
              <h3>
                WHO AM I
              </h3>
              <h1>HELLO</h1>
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

          <div className="content-body">
            <p> 
              Soy un profesional con destacadas habilidades de comunicación y trabajo en equipo,
              con capacidad en resolver problemas y adaptarse a entornos dinámicos.
              Especializado en el desarrollo de aplicaciones web , con conocimientos en sistemas Linux
              junto computación en la nube (Cloud Computing) gestionando Azure.
            </p>
            <p>
              Poseo un fuerte enfoque en la gestión y planificación de proyectos, incluyendo
              la creación de prototipos innovadores escuchando y comprender las necesidades de los demás,
              junto con mi empatía y liderazgo, me ha permitido destacar como asesor en programación,
              facilitando el desarrollo de competencias técnicas y lógicas en otros profesionales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
