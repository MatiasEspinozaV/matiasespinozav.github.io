// src/sections/Hero.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../styles/Hero.css';
import fotoPerfil from '../assets/MatiasEspinozaV.png';
import DivLk from '../assets/DivLk.png';
import GitHub from '../assets/Github.png';
import LinkedIn from '../assets/LinkedIn.png';
import Gmail from '../assets/Gmail.png';
import Whatsapp from '../assets/Whatsapp.png';
import Typewriter from '../components/Typewriter';
import ScrollAnimado from "../components/ScrollAnimado";


export default function Hero() {

  const copyEmail = () => {
    const email = "matiasespinozav.lk@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      // Mostramos notificación simple
      const popup = document.createElement("div");
      popup.innerText = "¡Correo copiado!";
      popup.className = "copy-popup";
      document.body.appendChild(popup);

      setTimeout(() => {
        popup.remove();
      }, 2000);
    });
  };
  return (
    <section className="portada">
      <ScrollAnimado direction="left" className="fotoScroll">
        <div className="divImg">
          <img src={fotoPerfil} alt="MatiasEspinozaV" className="fotoPerfil" />
        </div>
      </ScrollAnimado>
      <ScrollAnimado direction="right">
        <div className="textGrill">
          <h1 className="tituloNombre">Hola!, soy <span className="h1Jinx">MatiasEspinozaV</span></h1>
          <h1 className="tituloEspecialidad">Me Especializo en <span className="h1Jinx"><Typewriter
            words={["Aplicacion Web", "Frontend", "Backend", "Android"]}
            speed={80}
            pause={2000}
          /></span></h1>
          <img src={DivLk} alt="DivLk" className="divLk" />
          <p className="mt-2 text-lg">Energetico, proactivo e insistente, son las cualidades que aplico en el dia a dia.
  Soy curioso a la hora de aprender e inquieto cuando se debe aplicar nuevas soluciones o ideas para sacar a flote lo que me proponga. Siempre en busca del mejor momento para demostrar mis habilidades y aprender constantemente de toda situacion que se me proponga.</p>
          <img src={DivLk} alt="DivLk" className="divLk" />
          <div className="redesSociales">
            <li style={{ "--i": "#333333", "--j": "#6e6e6e" }}>
              <a href="https://github.com/MatiasEspinozaV" target="_blank">
                <span className="icon"><ion-icon name="logo-github"></ion-icon></span>
                <span className="title">GitHub</span>
              </a>
            </li>
            <li style={{ "--i": "#0077B5", "--j": "#00A0DC" }}>
              <a href="https://www.linkedin.com/in/matiasespinozav/" target="_blank">
                <span className="icon"><ion-icon name="logo-linkedin"></ion-icon></span>
                <span className="title">LinkedIn</span>
              </a>
            </li>
            <li style={{ "--i": "#D44638", "--j": "#C1443B" }}>
              <span className="icon"><ion-icon name="mail-outline" onClick={() => copyEmail()}></ion-icon></span>
              <span className="title" onClick={() => copyEmail()}>Gmail</span>
            </li>
            <li style={{ "--i": "#25D366", "--j": "#128C7E" }}>
              <a href="https://wa.me/56967388193" target="_blank">
                <span className="icon"><ion-icon name="logo-whatsapp"></ion-icon></span>
                <span className="title">WhatsApp</span>
              </a>
            </li>
          </div>
        </div>
      </ScrollAnimado>
    </section>
  );
}
