import '../styles/ProjectCard.css';
import Nube from '../assets/NubeJinx.png'
import ScrollAnimado from "../components/ScrollAnimado";

export default function ProjectCard({ title, image, description }) {
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
        <div className="card-front">
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </div>
        <div className="card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
