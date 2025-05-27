// src/sections/Hero.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../styles/Hero.css';
import fotoPerfil from '../assets/MatiasEspinozaV.png';
import DivLk from '../assets/DivLk.png';
import GitHub from '../assets/Github.png';
import LinkedIn from '../assets/LinkedIn.png';
import Gmail from '../assets/Gmail.png';
import Whatsapp from '../assets/Whatsapp.png';


export default function Hero() {
  return (
    <section className="portada">
      <img src={fotoPerfil} alt="MatiasEspinozaV" className="fotoPerfil" />
      <div className="textGrill">
        <h1 className="tituloNombre">Hola!, soy <span className="h1Jinx">MatiasEspinozaV</span></h1>
        <h1 className="tituloEspecialidad">Me Especializo en <span className="h1Jinx">Desarrollo Web</span></h1>
        <img src={DivLk} alt="DivLk" className="divLk" />
        <p className="mt-2 text-lg">Energetico, proactivo e insistente, son las cualidades que aplico en el dia a dia.
Soy curioso a la hora de aprender e inquieto cuando se debe aplicar nuevas solucines o ideas para sacar a flote lo que me proponga. Siempre en busca del mejor momento para demostrar mis habilidades y aprender constantemente de toda situacion que se me proponga.</p>
        <img src={DivLk} alt="DivLk" className="divLk" />
        <div className="redesSociales">          
          <a href="https://github.com/MatiasEspinozaV" target="_blank">
            <img src={GitHub} alt="GitHub" className="RRSS" />
            </a>
          <a href="https://www.linkedin.com/in/matiasespinozav/" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" className="RRSS" />
            </a>
          <a href="https://github.com/MatiasEspinozaV" target="_blank">
            <img src={Gmail} alt="Gmail" className="RRSS" />
            </a>
          <a href="https://github.com/MatiasEspinozaV" target="_blank">
            <img src={Whatsapp} alt="Whatsapps" className="RRSS" />
            </a>
        </div>
      </div>
    </section>
  );
}
