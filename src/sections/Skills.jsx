// src/sections/Skills.jsx
import { useState } from "react";

const skills = {
  frontend: ["React", "Vue", "HTML", "CSS", "Tailwind"],
  backend: ["Node.js", "Express", "PHP", "Laravel"],
  tools: ["Git", "Docker", "Figma", "Postman"]
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex gap-4 mb-4">
        {Object.keys(skills).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border ${activeTab === tab ? "bg-blue-500 text-white" : "bg-white text-black"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <ul className="grid grid-cols-2 gap-2">
        {skills[activeTab].map((skill, idx) => (
          <li key={idx} className="bg-gray-100 px-4 py-2 rounded">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
