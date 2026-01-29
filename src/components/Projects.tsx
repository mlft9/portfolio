import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';
import { homelabProject } from '../data/homelabProject';
import { windowsAdProject } from '../data/windowsAdProject';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  detailId?: string;
  status?: 'completed' | 'in-progress';
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Trier les projets : projets terminés d'abord, projets en cours à la fin
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.status === 'in-progress' && b.status !== 'in-progress') return 1;
    if (a.status !== 'in-progress' && b.status === 'in-progress') return -1;
    return 0;
  });

  const handleProjectClick = (detailId?: string) => {
    if (detailId) {
      setSelectedProject(detailId);
    }
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          {sortedProjects.map((project, index) => (
            <div key={index} className="project-card">
              {project.status && (
                <span className={`project-status ${project.status}`}>
                  {project.status === 'completed' ? 'Terminé' : 'En cours'}
                </span>
              )}
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.detailId && (
                    <button 
                      onClick={() => handleProjectClick(project.detailId)}
                      className="project-link"
                    >
                      Voir détails
                    </button>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      Voir le projet
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modale de détail du projet */}
      {selectedProject === 'homelab' && (
        <ProjectDetail
          project={homelabProject}
          onClose={closeProjectDetail}
        />
      )}
      {selectedProject === 'windowsad' && (
        <ProjectDetail
          project={windowsAdProject}
          onClose={closeProjectDetail}
        />
      )}
    </section>
  );
};

export default Projects;
