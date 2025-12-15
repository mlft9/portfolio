import React from 'react';
import './Skills.css';

interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Compétences</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
