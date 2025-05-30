// SkillBar.jsx
import React from "react";
import "../styles/SkillBar.css";

const SkillBar = ({ icon, name, progress,level }) => {
  // Determinar nivel visual según progreso
  const getLevelClass = (progress) => {
    if (progress >= 100) return "Experto";
    if (progress >= 70) return "Avanzado";
    if (progress >= 50) return "Intermedio";
    return "Principiante";
  };

  return (
    <div className={`skill-bar ${getLevelClass(progress)}`}>
      <div className="skill-header">
        <img src={icon} alt={name} className="skill-icon" />
        <span className="skill-name">{name}</span>
      </div>
      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="skill-progress-text">- {getLevelClass(progress)} -</div>
    </div>
  );
};

export default SkillBar;
