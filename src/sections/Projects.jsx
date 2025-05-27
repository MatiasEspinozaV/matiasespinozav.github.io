// src/components/ProjectCard.jsx
import '../styles/ProjectCard.css';

export default function ProjectCard({ title, image, description }) {
  return (
    <div className="card">
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
