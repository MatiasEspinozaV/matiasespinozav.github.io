// SkillBar.jsx
import React from "react";
import "../styles/SkillBar.css";
import { useEffect, useRef, useState } from 'react';

const SkillBar = ({ icon, name, progress,level }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(progress);
  // Determinar nivel visual según progreso
  const getLevelClass = (progress) => {
    if (progress >= 100) return "Experto";
    if (progress >= 70) return "Avanzado";
    if (progress >= 50) return "Intermedio";
    return "Principiante";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Solo animar una vez
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, []);

  

  return (
    <div className={`skill-bar ${getLevelClass(progress)}`} ref={barRef}>
      <div className="skill-header">
        <img src={icon} alt={name} className="skill-icon" />
        <span className="skill-name">{name}</span>
      </div>
      <div className="progress-container">
        <div className="progress-fill" style={{width: isVisible ? `${progress}%` : '0%',}} />
      </div>
      <div className="skill-progress-text">- {getLevelClass(progress)} -</div>
    </div>
  );
};

export default SkillBar;
