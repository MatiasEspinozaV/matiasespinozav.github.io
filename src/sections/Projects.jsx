import Nube from '../assets/NubeJinx.png'
import WalkIcon from '../assets/card/WalkLogo.png';
import ModeladorIcon from '../assets/card/ModeladorLogo.png';
import VitamIcon from '../assets/card/VitamLogo.png';
import WalkPortada from '../assets/card/WalkPortada.png';
import ModeladorPortada from '../assets/card/ModeladorPortada.png';
import VitamPortada from '../assets/card/VitamPortada.png';

import ScrollAnimado from "../components/ScrollAnimado";
import '../styles/Project.css';
import CardProyect from '../components/CardProyect';
import {frontIcon} from '../assets/icon/front/frontIcons'; 
import {backIcon} from '../assets/icon/back/backIcons';
import {toolsIcon} from '../assets/icon/tools/toolsIcons';

export default function ProjectCard({ titleImg, image, description }) {
  return (
    <div className="card">
      <div className="divTitulo">
        <ScrollAnimado direction="right" offsetY={0.9} >
            <img src={Nube} alt="Nube" className="nubeTitulo"/>
          </ScrollAnimado>
          <ScrollAnimado direction="right" delay={0.2}>
            <h1 className="titulo">Proyectos</h1>
          </ScrollAnimado>
      </div>
      <div className="card-inner">
        <CardProyect
          linkWeb={"https://walkability.cedeus.cl/"}
          fontColor=' #ffffff' 
          imgColor='#001968'
          backColor='#001968'
          frontImage={WalkPortada}
          titleImg={WalkIcon}
          description={"Walkability es una aplicación móvil que tiene como objetivo recolectar la experiencia peatonal, de manera que se promuevan las mejoras de infraestructura vial."}
          techIcons={[frontIcon["Flutter"], frontIcon["JavaScript"], frontIcon["CSS"], frontIcon["Vue"], toolsIcon["GitHub"], toolsIcon["Figma"], toolsIcon["Postman"]]}
          />
          <CardProyect
          linkWeb={"https://modelador.cedeus.cl/"}
          fontColor=' #ffffff' 
          backColor='#09092C'
          frontImage={ModeladorPortada}
          titleImg={ModeladorIcon}
          description={"Modelador es una herramienta que permite crear y evaluar escenarios de accesibilidad urbana a nivel comunal."}
          techIcons={[frontIcon["TypeScript"], frontIcon["HTML"], frontIcon["CSS"], frontIcon["Vue"], toolsIcon["GitHub"], toolsIcon["Figma"]]}
          />
          <CardProyect
          linkWeb={"https://vitamltda.cl/"}
          frontImage={VitamPortada}
          titleImg={VitamIcon}
          description={"Desarrollo aplicacion web para Vitam Ltda. Empresa minera prestamista de servicios en la Region de Tarapacá."}
          techIcons={[frontIcon["JavaScript"], frontIcon["CSS"], frontIcon["Vue"], backIcon["Django"], toolsIcon["GitHub"], toolsIcon["Postman"]]}
          />
      </div>
    </div>
  );
}
