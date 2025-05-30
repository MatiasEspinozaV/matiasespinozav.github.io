import { useState } from "react";
import '../styles/Skills.css';
import Nube from '../assets/NubeJinx.png'
import ScrollAnimado from "../components/ScrollAnimado";
import SkillBar from "../components/SkillBar";
import {frontIcon} from '../assets/icon/front/frontIcons'; 
import {backIcon} from '../assets/icon/back/backIcons';
import {toolsIcon} from '../assets/icon/tools/toolsIcons';

export default function Skills() {
  

  return (
    
    <section className="skills-container">      
      <div className="divTitulo">
          <ScrollAnimado direction="right" offsetY={0.9} >
            <img src={Nube} alt="Nube" className="nubeTitulo"/>
          </ScrollAnimado>
          <ScrollAnimado direction="right" delay={0.2}>
            <h1 className="titulo">Skills</h1>
          </ScrollAnimado>
      </div>
      <div className="skills-sections">
        <ScrollAnimado direction="left">
          <div className="skill-block frontend">
            <h3>FRONTEND</h3>
              <div className="skillBars">
                <SkillBar icon={frontIcon["JavaScript"]} name="JavaScript" progress={70} />
                <SkillBar icon={frontIcon["TypeScript"]} name="TypeScript" progress={70} />
                <SkillBar icon={frontIcon["Vue"]} name="Vue" progress={80} />
                <SkillBar icon={frontIcon["Flutter"]} name="Flutter" progress={70} />
                <SkillBar icon={frontIcon["HTML"]} name="HTML" progress={100} />
                <SkillBar icon={frontIcon["CSS"]} name="CSS" progress={90} />
                <SkillBar icon={frontIcon["Angular"]} name="Angular" progress={30} />
                <SkillBar icon={frontIcon["React"]} name="React" progress={50} />
                <SkillBar icon={frontIcon["Wordpress"]} name="Wordpress" progress={50} />
              </div>
          </div>
        </ScrollAnimado>

        <ScrollAnimado direction="left" offsetY={0.9} >
        <div className="skill-block backend">
          <h3>BACKEND</h3>
            <div className="skillBars">
              <SkillBar icon={backIcon["C"]} name="C" progress={10} />
              <SkillBar icon={backIcon["Django"]} name="Django" progress={30} />
              <SkillBar icon={backIcon["Firebase"]} name="Firebase" progress={50} />
              <SkillBar icon={backIcon["MySQL"]} name="MySQL" progress={60} />
              <SkillBar icon={backIcon["PHP"]} name="PHP" progress={20} />
              <SkillBar icon={backIcon["Postgres"]} name="Postgres" progress={60} />
              <SkillBar icon={backIcon["Python"]} name="Python" progress={50} />
            </div>
        </div>
        </ScrollAnimado>

        <ScrollAnimado direction="left" offsetY={0.9} >
        <div className="skill-block tools">
          <h3>HERRAMIENTAS</h3>
            <div className="skillBars">
              <SkillBar icon={toolsIcon["CMD"]} name="CMD" progress={90} />
              <SkillBar icon={toolsIcon["Figma"]} name="Figma" progress={70} />
              <SkillBar icon={toolsIcon["GitHub"]} name="Github" progress={80} />
              <SkillBar icon={toolsIcon["Linux"]} name="Linux" progress={70} />
              <SkillBar icon={toolsIcon["Office"]} name="Office" progress={100} />
              <SkillBar icon={toolsIcon["Postman"]} name="Postman" progress={80} />
              <SkillBar icon={toolsIcon["Trello"]} name="Trello" progress={70} />
            </div>
        </div>
        </ScrollAnimado>
      </div>
    </section>
  );
}
